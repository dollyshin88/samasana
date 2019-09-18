class AddNotesColumnToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :notes, :text, default: ''
  end
end
