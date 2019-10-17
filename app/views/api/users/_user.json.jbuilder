
json.extract! user, :id, :name, :email, :profile_photo
if user.profile_photo
    json.extract! user, :profile_photo
end


