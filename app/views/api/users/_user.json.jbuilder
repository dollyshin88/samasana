
json.extract! user, :id, :name, :email
if user.profile_photo
    json.profile_photo user.profile_photo
end


