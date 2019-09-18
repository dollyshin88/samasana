class Api::WorkspaceMembershipsController < ApplicationController
    def create
        #this will be called only for invited member and not admin member - is_admin value will be set to false by default
        @workspace_membership = WorkspaceMembership.new(workspace_memberships_params)
        if @workspace_membership.save
            render :show
        else
            render json: @workspace.errors.full_messages, status: 400
        end
    end

    def destroy
        @workspace_membership = WorkspaceMembership.find_by(id: params[:id])
        @workspace_membership.destroy
        render :show
    end

    private
    def workspace_memberships_params
        params.require(:workspace_memberships).permit(:workspace_id, :member_id)
    end
end
