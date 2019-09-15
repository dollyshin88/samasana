
@workspaces.each do |workspace|
   
    json.set! workspace.id do
        json.id workspace.id
        json.name workspace.name
        json.taskIds workspace.tasks.sort_by{|task| task.general_order}.map{|task| task.id}
        
    end
    
end


