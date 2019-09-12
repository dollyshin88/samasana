# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  owner_id     :integer          not null
#  workspace_id :integer          not null
#  notes        :text
#  color        :string           not null
#  due_on       :date
#  start_on     :date
#  layout       :string           default("software implementation"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
    COLORS = %w(dark-pink dark-green dark-blue dark-red dark-teal dark-brown dark-orange dark-purple dark-warm-gray light-pink light-green light-blue light-red light-teal light-yellow light-orange light-purple light-warm-gray)

    validates :name, :owner_id, :workspace_id, :color, presence: true
    validates :color, inclusion: COLORS
    validates :name, uniqueness: { scope: :owner_id }
    validates :name, uniqueness: { scope: :workspace_id }
    after_initialize :ensure_color

    def ensure_color
        self.color = COLORS.sample
    end

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: :Workspace 

    has_many :tasks,
    foreign_key: :project_id,
    class_name: :Task

end
