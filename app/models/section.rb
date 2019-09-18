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
    validates :name, :project, :order, presence: true
    validates :name, uniqueness: { scope: :project_id }
    after_initialize :ensure_order

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project

    has_many :tasks,
    foreign_key: :section_id, 
    class_name: :Task, 
    dependent: :destroy
    #currently cannot remove a section unless empty of tasks

    def self.batch_update_order(sectionIdArr)
        updated = []
        ActiveRecord::Base.transaction do
            sectionIdArr.each_with_index do |sectionId, idx|
                section = Section.find(sectionId)
                section.update!(order: idx)
                updated.push(section)
            end
        end
        updated
    end


    private
    def ensure_order
        self.order ||= calculate_order(project_id)
    end
    def calculate_order(project_id)
        highest_order_section = Project.find(project_id).sections.max_by { |section| section.order }
        highest_order_section.order + 1
    end

   


end
