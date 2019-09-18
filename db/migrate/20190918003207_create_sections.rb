class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :name, null: false
      t.integer :project_id, null: false
      t.integer :order, null: false
      t.timestamps
    end
    # add_index :sections, [:project_id, :name], unique: true
  end
end
