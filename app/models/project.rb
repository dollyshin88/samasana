# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  owner_id     :integer          not null
#  workspace_id :integer          not null
#  notes        :text
#  color        :string           not null
#  due_on       :date
#  start_on     :date
#  layout       :string           default("software implementation"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Project < ApplicationRecord
end
