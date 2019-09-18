class AddSectionIdAndSectionOrderToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :section_id, :integer
    add_column :tasks, :section_order, :integer
    add_index :tasks, :section_id
  end
end
