class Api::TasksController < ApplicationController
    def index
        # note: consider only haveing one index route that returns every task for the workspace and parse the tasks in the frontend based on the associated ids(use selectors)
        if params[:workspace_id]
            @tasks = Task.where(workspace_id: params[:workspace_id])
        elsif params[:project_id]
            @tasks = Task.where(project_id: params[:project_id])
        else
            @tasks = current_user.assigned_tasks
        end
        render :index
    end

    def show
        @task = Task.find_by(id: params[:id])
        render :show
    end

    def create 
        @task = Task.new(task_params)
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages
        end
    end

    def update
        @task = Task.find_by(id: params[:id])
        if @task.update
            render :show
        else
            render json: @task.errors.full_messages
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        @task.destroy
        render json: @task
    end

    private
    def task_params
        params.require(:task).permit(:name, :assignee_id, :assignee_status, :completed, :completed_at, :due_on, :start_on, :project_id, :parent_task_id)
    end
end
