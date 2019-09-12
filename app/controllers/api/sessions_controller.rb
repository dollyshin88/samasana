class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        
        if @user
            login(@user)
            @workspaces = @user.workspaces.includes(:members)
            render '/api/users/show'
        else
            render json: ['invalid email or password'], status: 401
        end
    end

    def destroy
        if !current_user
            render json: ['No one is signed in'], status: 404
        else
            logout
            #render '/api/users/show'
        end
    end
end
