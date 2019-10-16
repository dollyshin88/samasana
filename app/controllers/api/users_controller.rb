class Api::UsersController < ApplicationController
    def index
        @users = Workspace.find_by(id: params[:workspace_id]).members
        render :index
    end
    
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render :singleshow
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password, :profile_photo)
    end
end


#======= development questions=========
# what are appropriate error status code for failing to create a new user?