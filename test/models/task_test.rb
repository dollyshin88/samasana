# == Schema Information
#
# Table name: tasks
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  creator_id      :integer          not null
#  assignee_id     :integer
#  assignee_status :string
#  completed       :boolean          default(FALSE)
#  completed_at    :date
#  due_on          :date
#  start_on        :date
#  project_id      :integer
#  workspace_id    :integer          not null
#  parent_task_id  :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  general_order   :integer          not null
#  notes           :text             default("")
#  section_id      :integer
#  section_order   :integer
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
