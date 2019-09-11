class CreateWorkspaceMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :workspace_memberships do |t|
      t.integer :member_id, null: false
      t.integer :workspace_id, null: false
      t.boolean :is_admin, default: false
      t.timestamps
    end
    add_index :workspace_memberships, :member_id
    add_index :workspace_memberships, :workspace_id
    add_index :workspace_memberships, [:member_id, :workspace_id], unique: true
  end
end
