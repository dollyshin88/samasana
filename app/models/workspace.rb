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

    has_many :workspace_memberships,
    foreign_key: :workspace_id,
    class_name: :WorkspaceMembership,
    dependent: :destroy

    has_many :members,
    through: :workspace_memberships, 
    source: :member

    has_many :projects,
    foreign_key: :workspace_id,
    class_name: :Project,
    dependent: :destroy

    has_many :tasks,
    foreign_key: :workspace_id,
    class_name: :Task,
    dependent: :destroy 

end
