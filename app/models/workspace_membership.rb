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

class WorkspaceMembership < ApplicationRecord
    BOOL = [true, false];
    validates :member_id, :workspace_id, presence: true
    validates :member_id, uniqueness: { scope: :workspace_id }
    validates :is_admin, inclusion: BOOL

    belongs_to :member,
    foreign_key: :member_id,
    class_name: :User

    belongs_to :workspace,
    foreign_key: :workspace_id,
    class_name: :Workspace
end
  