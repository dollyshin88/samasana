class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name, null: false
      t.integer :creator_id, null: false
      t.integer :assignee_id
      t.string :assignee_status
      t.boolean :completed, default: false
      t.date :completed_at
      t.date :due_on
      t.date :start_on
      t.integer :project_id
      t.integer :workspace_id, null: false
      t.integer :parent_task_id
      t.timestamps
    end
    add_index :tasks, :creator_id
    add_index :tasks, :assignee_id
    add_index :tasks, :assignee_status
    add_index :tasks, :due_on
    add_index :tasks, :workspace_id
    add_index :tasks, :parent_task_id
  end
end
