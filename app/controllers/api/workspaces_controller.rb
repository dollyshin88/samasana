class Api::WorkspacesController < ApplicationController
    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            #create workspace membership when current user creates a new workspace
            #WorkspaceMembership.create(member_id: current_user.id, workspace_id: @workspace.id, is_admin: true)
            @member = current_user
            render :singleshow
        else
            render json: @workspace.errors.full_messages
        end
    end


   
    def index 
        #index sends a list of workspaces for the current user
        @workspaces = current_user.workspaces.includes(:tasks)
        
        render :index 
    end

    # def show
    #     @workspace = Workspace.find_by(id: params[:id])
    #     @members = @workspace.members
    #     if @workspace 
    #         render :show
    #     else
    #         render json: ['No workspace found']
    #     end
    # end

    def update
    end

    def destroy
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name)
    end

end
