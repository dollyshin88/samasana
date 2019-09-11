# == Schema Information
#
# Table name: workspaces
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Workspace < ApplicationRecord
    validates :name, presence: true

    has_many :workspace_memberships, dependent: :destroy

    has_many :members,
    through: :workspace_memberships,
    source: :member

    
end
