json.set! membership.id do
    json.extract! membership, :id, :workspace_id, :member_id
end

# sample 
#{
#     1: { id: 1,
#          workspace_id: 2, 
#          member_id: 4 }
# }