# payload -- currently used by #create action -- will be deprecated

json.workspaces do 
    json.partial! 'api/workspaces/workspace', workspace: @workspace
end

json.members do
    json.set! @member.id do
        json.partial! 'api/users/user', user: @member
    end
end

