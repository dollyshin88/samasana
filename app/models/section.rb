# == Schema Information
#
# Table name: sections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  project_id :integer          not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Section < ApplicationRecord
    validates :name, :project_id, :order, presence: true
    validates :name, uniqueness: { scope: :project_id}
    after_initialize :ensure_order

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

    has_many :tasks,
    foreign_key: :section_id, 
    class_name: :Section, 
    dependent: :destroy
    #currently cannot remove a section unless empty of tasks

    private
    def ensure_order
    end

   


end
