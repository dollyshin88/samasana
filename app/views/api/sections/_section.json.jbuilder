# Table name: sections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  project_id :integer          not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null


json.extract! section, :id, :name, :project_id, :order

if section.tasks 
    json.taskIds section.tasks.sort_by{|task| task.section_order}.map{|task| task.id}
else
    json.taskIds []
end
