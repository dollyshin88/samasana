json.user do
    json.partial! 'api/users/user', user: @user
end


# json.user_memberships do
#     @user_memberships.each do |membership| 
#         json.partial! 'api/workspace_memberships/workspace_membership', membership: membership
#     end
# end


    @workspaces.each do |workspace|
        
        json.workspaces do 
            json.set! workspace.id do
                json.partial! 'api/workspaces/workspace', workspace: workspace
            end
        end
        json.members do 
            workspace.members.each do |member|
                json.set! member.id do
                    json.partial! 'api/users/user', user: member
                end
            end
        end
    end


# sample
# {
#     user: {
#         id: 1, 
#         email: ''
#        },

#     members: { 1: {
#         id: 1,
#         name: 'tester', 
#         email: 'tester@test.com' }
#     }
#     workspaces: { 1: {
#           id: 1, 
#           name: 'stuff'
#           }
#      } 
# }