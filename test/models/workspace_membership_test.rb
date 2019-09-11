# == Schema Information
#
# Table name: workspace_memberships
#
#  id           :bigint           not null, primary key
#  member_id    :integer          not null
#  workspace_id :integer          not null
#  is_admin     :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class WorkspaceMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
