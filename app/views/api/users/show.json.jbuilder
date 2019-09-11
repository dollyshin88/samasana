json.user do
    json.partial! 'api/users/user', user: @user
end


json.user_memberships do
    @user_memberships.each do |membership| 
        json.partial! 'api/workspace_memberships/workspace_membership', membership: membership
    end
end

# sample
# {
#     user: {
#         id: 1, 
#         email: ''
#        },

#     user_memberships: { 1: {
#         id: 1,
#         workspace_id: 1, 
#         member_id: 1 }
#     }
# }