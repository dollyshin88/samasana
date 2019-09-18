json.set! project.id do
    @projects.each do |project|
        json.partial! 'api/projects/project', project: project
    end
end
