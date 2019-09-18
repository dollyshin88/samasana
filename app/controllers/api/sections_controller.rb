class Api::SectionsController < ApplicationController

    def index 
        @sections = Project.find_by(id: params[:project_id]).sections.includes(:tasks)
        render :index
    end

    def create
        @section = Section.new(section_params)
        if @section.save
            render :show
        else
            render json: @section.errors.full_message
        end
    end

    def update
        @section = Section.find_by(id: params[:id])
        if @section.update(section_params)
            render :show
        else
            render json: @section.errors.full_message
        end
    end

    def destroy
        @section = Section.find_by(id: params[:id])
        if @section.tasks
            render json: ['you must move tasks out of the section before deleting']
        else
            @section.destroy
            render :show
        end
    end

    private

    def section_params
        params.require(:section).permit(:name, :project_id, :order)
    end
end
