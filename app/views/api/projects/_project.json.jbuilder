
json.extract! project, :id, :name, :owner_id, :workspace_id, :notes, :color, :due_on, :start_on
json.sectionIds project.sections.sort_by{|section| section.order}.map{|section| section.id}

