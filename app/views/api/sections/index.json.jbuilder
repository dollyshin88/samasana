@sections.each do |section| 
    json.partial! 'api/sections/section', section: section
end