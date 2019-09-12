class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.integer :workspace_id, null: false
      t.text :notes
      t.string :color, null: false
      t.date :due_on
      t.date :start_on
      t.string :layout, null: false, default: 'software implementation'
      
      t.timestamps
    end
    add_index :projects, [:owner_id, :name], unique: true
    add_index :projects, [:workspace_id, :name], unique: true
  end
end
