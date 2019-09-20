json.project do
    json.set! @project.id do
        json.partial! 'api/projects/project', project: @project
    end
end

json.sections do
    @project.sections.each do |section|
        json.set! section.id do
            json.partial! 'api/sections/section', section: section
        end
    end
end
#with bonus scopes added (tags), will be sending extra information