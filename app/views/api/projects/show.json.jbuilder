json.project do
    json.partial! 'api/projects/project', project: @project
end

#with bonus scopes added (tags), will be sending extra information