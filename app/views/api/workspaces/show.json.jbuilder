json.workspace do 
    json.partial! 'api/workspaces/workspace', workspace: @workspace
end

json.members do
    @workspace.members.each do |member|
        json.set! member.id do
            json.partial! 'api/users/user', user: member
        end
    end
end

@workspace.projects.each do |project|
    json.projects do 
        json.set! project.id do
            json.partial! 'api/projects/project', project: project
        end
    end
    json.sections do
        project.sections.each do |section|
            json.set! section.id do
                json.partial! 'api/sections/section', section: section
            end
        end
    end
end

json.tasks do
    @workspace.tasks.each do |task|
        json.partial! 'api/tasks/task', task: task
    end
end

