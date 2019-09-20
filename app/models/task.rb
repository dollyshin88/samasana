# == Schema Information
#
# Table name: tasks
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  creator_id      :integer          not null
#  assignee_id     :integer
#  assignee_status :string
#  completed       :boolean          default(FALSE)
#  completed_at    :date
#  due_on          :date
#  start_on        :date
#  project_id      :integer
#  workspace_id    :integer          not null
#  parent_task_id  :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  general_order   :integer          not null
#  notes           :text             default("")
#  section_id      :integer
#  section_order   :integer
#

class Task < ApplicationRecord
    BOOL = [true, false]
    validates :name, :creator, :workspace, presence: true
    validates :completed, inclusion: BOOL
    validate :ensure_section_if_project
    before_validation :ensure_general_order, :set_default_section
  

    belongs_to :creator, 
    foreign_key: :creator_id,
    class_name: :User

    belongs_to :assignee,
    foreign_key: :assignee_id,
    class_name: :User,
    optional: true

    belongs_to :project,
    foreign_key: :project_id,
    class_name: :Project,
    optional: true

    belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: :Workspace 

    belongs_to :parent_task,
    foreign_key: :parent_task_id,
    class_name: :Task,
    optional: true

    belongs_to :section,
    foreign_key: :section_id,
    class_name: :Section,
    optional: true

    has_many :child_tasks,
    foreign_key: :parent_task_id,
    class_name: :Task,
    dependent: :destroy
    
    def self.batch_update_section_order(section_id, taskIdArr)
        updated = []
        ActiveRecord::Base.transaction do
            taskIdArr.each_with_index do |taskId, idx|
                
                task = Task.find(taskId)
                task.update!(section_id: section_id, section_order: idx)
                updated.push(task)
            end
        end
        updated
    end

    def self.batch_update_general_order(taskIdArr)
        updated = []
        ActiveRecord::Base.transaction do
            taskIdArr.each_with_index do |taskId, idx|
                task = Task.find(taskId)
                task.update!(general_order: idx)
                updated.push(task)
            end
        end
        updated
    end

    private 
    def ensure_general_order
        self.general_order ||= calculate_general_order
    end

    def set_default_section
        if project_id
            defaultSection = Project.find(project_id).sections.where(order:0)[0]
            self.section_id ||= defaultSection.id
            set_default_section_order(section_id)
        end
        
    end

    def set_default_section_order(section_id)
        
        self.section_order ||= calculate_section_order(section_id)
    end

    def calculate_section_order(section_id)
        
        section = Section.find(section_id)
        section_tasks = section.tasks
        if !section_tasks.empty?
            highest_order_task = section_tasks.max_by { |task| task.section_order }
            return highest_order_task.section_order + 1
        end
        return 0
    end

    def ensure_section_if_project
        if self.project_id && self.section_id.nil?
            errors.add :section, 'must be specified when task is added to a project'
        end
    end

    def calculate_general_order
        workspace_tasks = Task.where(workspace_id: self.workspace_id) 
        if !workspace_tasks.empty?
            highest_order_task = workspace_tasks.max_by { |task| task.general_order }
            return highest_order_task.general_order + 1
        end
        return 0
    end



end
