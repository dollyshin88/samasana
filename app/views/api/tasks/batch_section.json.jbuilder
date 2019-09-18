json.tasks do
    @tasks.each do |task|
        json.partial! 'api/tasks/task', task: task
    end
end

json.sections do
    json.partial! 'api/sections/section', section: @source
    json.partial! 'api/sections/section', section: @destination
end

# sections: {
#   1: {id: 1, name: 'whatever', project_id: 2, order: 1 },
#   2: {id:2 ...  }
# }