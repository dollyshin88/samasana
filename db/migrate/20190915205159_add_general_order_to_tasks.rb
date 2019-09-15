class AddGeneralOrderToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :general_order, :integer, null: false
  end
end
