class Api::WorkspacesController < ApplicationController
    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            render :show
        else
            render json: @workspace.errors.full_messages
        end
    end

    def index 
    end

    def show
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
