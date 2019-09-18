# == Schema Information
#
# Table name: projects
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  owner_id     :integer          not null
#  workspace_id :integer          not null
#  color        :string           not null
#  due_on       :date
#  start_on     :date
#  layout       :string           default("software implementation"), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  notes        :text             default("")
#

require 'test_helper'

class ProjectTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
