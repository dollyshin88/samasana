# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_photo   :binary
#

class User < ApplicationRecord
    validates :name, :email, :password_digest, :session_token, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil if !user
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    has_many :workspace_memberships,
    foreign_key: :member_id,
    class_name: :WorkspaceMembership,
    dependent: :destroy

    has_many :workspaces,
    through: :workspace_memberships,
    source: :workspace 

    has_many :projects,
    foreign_key: :project_id,
    class_name: :Project 
    # do not destroy projects even when the owner is removed
    # remove project when workspace is removed

    has_many :created_tasks,
    foreign_key: :creator_id,
    class_name: :Task, 
    dependent: :destroy
    # currently users are not deleted

    has_many :assigned_tasks,
    foreign_key: :assignee_id,
    class_name: :Task

    
end
