json.extract! workspace, :id, :name
json.taskIds workspace.tasks.sort_by{|task| task.general_order}.map{|task| task.id}
