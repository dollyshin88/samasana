json.sections do 
    @sections.each do |section| 
        json.set! section.id do
            json.partial! 'api/sections/section', section: section
        end
    end
end

json.project do
    json.set! @project.id do
        json.partial! 'api/projects/project', project: @project
    end
end