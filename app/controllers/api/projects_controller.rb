class Api::ProjectsController < ApplicationController
    def index
        # project index is nested under workspaces
        @projects = Project.includes(:sections).where(workspace_id: params[:workspace_id])
        render :index
    end

    def show
        @project = Project.includes(:sections).find_by(id: params[:id])
        render :show
    end

    def create
        project = Project.new(project_params)
        project.owner_id = current_user.id 
        
        if project.save
            @project = Project.includes(:sections).find(project.id) 
            render :show
        else
            render json: @project.errors.full_messages, status: 400
        end
    end

    def update
        @project = Project.includes(:sections).find_by(id: params[:id])
        if @project.update(project_params)
            render :show
        else
            render json: @project.errors.full_messages, status: 400
        end
    end

    def destroy
        @project = Project.find_by(id: params[:id])
        @project.destroy
        render json: @project
    end

    private
    def project_params
        params.require(:project).permit(:name, :notes, :workspace_id, :color, :due_on, :start_on)
    end

end
