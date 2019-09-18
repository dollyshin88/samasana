class ChangeNotesColumnOnProjects < ActiveRecord::Migration[5.2]
  def change
    remove_column :projects, :notes 
    add_column :projects, :notes, :text, default: ''
  end
end
