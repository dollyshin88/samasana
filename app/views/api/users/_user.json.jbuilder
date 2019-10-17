
json.extract! user, :id, :name, :email
if user.profile_photo
    json.extract! user, :profile_photo
end


