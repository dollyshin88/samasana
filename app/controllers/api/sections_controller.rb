class Api::SectionsController < ApplicationController

    def index 
        if params[:project_id]
            @sections = Project.find_by(id: params[:project_id]).sections.includes(:tasks)
        else 
            @sections = Section.all 
        end
        render :index
    end

    def create
        @section = Section.new(section_params)
        if @section.save
            render :show
        else
            render json: @section.errors.full_messages, status: 400
        end
    end

    def update
        @section = Section.find_by(id: params[:id])
        if @section.update(section_params)
            render :show
        else
            render json: @section.errors.full_messages, status: 400
        end
    end

    def destroy
        @section = Section.find_by(id: params[:id])
        if !@section.tasks.empty?
            render json: ['you must move tasks out of the section before deleting'], status: 400
        else
            @section.destroy
            render json: @section
        end
    end

    def batch
        begin
            @sections = Section.batch_update_order(batch_params[:sectionIds])
        rescue ActiveRecord::RecordInvalid => exception
            render json: [exception.message], status: 400
        end
        @project = Project.includes(:sections).find_by(id: params[:project_id])
        render :batch_index
    end

    private

    def section_params
        params.require(:section).permit(:name, :project_id, :order)
    end

    def batch_params
        params.require(:batch).permit(:sectionIds => [])
    end
end
