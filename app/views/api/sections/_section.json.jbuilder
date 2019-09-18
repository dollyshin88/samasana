# Table name: sections
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  project_id :integer          not null
#  order      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null

json.set! section.id do
    json.extract! section, :id, :name, :project_id, :order
    json.taskIds section.tasks.sort_by{|task| task.section_order}.map{|task| task.id}
end
