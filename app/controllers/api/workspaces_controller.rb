class Api::WorkspacesController < ApplicationController
    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            #create workspace membership when current user creates a new workspace
            WorkspaceMembership.create(member_id: current_user.id, workspace_id: @workspace.id, is_admin: true)
            @member = current_user
            render :singleshow
        else
            render json: @workspace.errors.full_messages
        end
    end


    ## NOTE: may not need index action
    def index 
        #index sends a list of workspaces for the user
        user = User.find(params[:user_id])
        @workspaces = user.workspaces.includes(:members)
        render :index
    end

    def show
        @workspace = Workspace.find_by(id: params[:id])
        @members = @workspace.members
        if @workspace 
            render :show
        else
            render json: ['No workspace found']
        end
    end

    def update
    end

    def destroy
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name)
    end

end
