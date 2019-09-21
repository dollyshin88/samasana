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
        @task.creator_id = current_user.id 
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages, status: 400
        end
    end

    def update
        @task = Task.find_by(id: params[:id])
        if @task.update(task_params)
            render :show
        else
            render json: @task.errors.full_messages, status: 400
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        @task.destroy
        render json: @task
    end

    def section_batch
        
        @source_arr = batch_params[:source][:taskIds]
        @destination_arr = batch_params[:destination][:taskIds]
        @source_arr = [] if @source_arr.nil?
        
        begin
            source_tasks = Task.batch_update_section_order(batch_params[:source][:id], @source_arr)
            destination_tasks = Task.batch_update_section_order(batch_params[:destination][:id], @destination_arr)
        rescue ActiveRecord::RecordInvalid => exception
            render json: [exception.message], status: 400
        end
        
        @source = Section.includes(:tasks).find(batch_params[:source][:id])
        @destination = Section.includes(:tasks).find(batch_params[:destination][:id])
        @tasks = source_tasks.concat(destination_tasks)
        
        render :batch_section
    end

    def general_batch
        begin
            @tasks = Task.batch_update_general_order(batch_params[:taskIds])
        rescue ActiveRecord::RecordInvalid => exception
            render json: [exception.message], status: 400
        end
        @taskIds = batch_params[:taskIds]
        @workspaceId = params[:workspace_id]
        render :batch_general
    end

    private
    def task_params
        params.require(:task).permit(:name, :assignee_id, :workspace_id, :assignee_status, :completed, :completed_at, :due_on, :start_on, :project_id, :parent_task_id, :general_order, :notes, :section_id, :section_order)
    end

    def batch_params
        params.require(:batch).permit(:source => [:id, :taskIds => []], :destination => [:id, :taskIds => []], :taskIds => [])
    end
end
