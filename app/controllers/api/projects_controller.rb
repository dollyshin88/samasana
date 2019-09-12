class Api::ProjectsController < ApplicationController
    def index
        # project index is nested under workspaces
        @projects = Project.find_by(workspace_id: params[:workspace_id])
        render :index
    end

    def show
        @project = Project.find_by(id: params[:id])
        render :show
    end

    def create
        @project = Project.new(project_params)
        @project.owner_id = current_user.id 
        if @project.save
            render :show
        else
            render json: @project.errors.full_messages
        end
    end

    def update
        @project = Project.find_by(id: params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages
        end
    end

    def destroy
        @project = Project.find_by(id: params[:id])
        @project.destroy
        render :show
    end

    private
    def project_params
        params.require(:project).permit(:name, :notes, :workspace_id, :color, :due_on, :start_on)
    end

end
