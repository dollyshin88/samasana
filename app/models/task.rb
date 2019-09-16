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
#

class Task < ApplicationRecord
    BOOL = [true, false]
    validates :name, :creator_id, :workspace_id, presence: true
    validates :completed, inclusion: BOOL
    after_initialize :ensure_general_order

    def ensure_general_order
        self.general_order ||= calculate_general_order
    end

    def calculate_general_order
        workspace_tasks = Task.where(workspace_id: self.workspace_id) 
        if !workspace_tasks.empty?
            highest_order_task = workspace_tasks.max_by { |task| task.general_order }
            return highest_order_task.general_order + 1
        end
        return 0
    end

    #note: when sections and association with secion is added -- section_id is required if project_id is present

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

    has_many :child_tasks,
    foreign_key: :parent_task_id,
    class_name: :Task,
    dependent: :destroy


end
