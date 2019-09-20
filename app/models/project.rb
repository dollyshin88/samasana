# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  owner_id     :integer          not null
#  workspace_id :integer          not null
#  color        :string           not null
#  due_on       :date
#  start_on     :date
#  layout       :string           default("software implementation"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  notes        :text             default("")
#

class Project < ApplicationRecord
    #COLORS = %w(dark-pink dark-green dark-blue dark-red dark-teal dark-brown dark-orange dark-purple dark-warm-gray light-pink light-green light-blue light-red light-teal light-yellow light-orange light-purple light-warm-gray)
    COLORS = ['#FC86A8', '#9AC82B', '#1CA0E7', '#6E64EE', '#FD8F02', '#ECBB02']

    validates :name, :owner, :workspace, :color, presence: true
    validates :color, inclusion: COLORS
    validates :name, uniqueness: { scope: :owner_id }
    validates :name, uniqueness: { scope: :workspace_id }
    before_validation :ensure_color
    after_save :generate_boiler_plate_sections

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
    class_name: :Task,
    dependent: :destroy

    has_many :sections,
    foreign_key: :project_id,
    class_name: :Section,
    dependent: :destroy

    def generate_boiler_plate_sections
        section_boiler_plate = ['Discovery + Planning', 'Design', 'Development', 'Testing', 'Deployment', 'Ongoing Support']

        section_boiler_plate.each_with_index do |title, i| 
            Section.create(name: title, order: i, project_id: self.id)
        end
    end 

end
