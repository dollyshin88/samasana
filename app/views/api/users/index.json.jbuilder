# this is specific to rendering all the members of a request's workspace id

json.members do 
    @users.each do |user|
        json.set! user.id do
            json.partial! 'api/users/user', user: user
        end
    end
end