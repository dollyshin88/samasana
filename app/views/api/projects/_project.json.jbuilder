json.set! project.id do
    json.extract! project, :id, :name, :owner_id, :workspace_id, :notes, :color, :due_on, :start_on
end