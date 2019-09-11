class Api::WorkspaceMembershipsController < ApplicationController
    def create
    end

    def destroy
    end

    private
    def workspace_memberships_params
        params.require(:workspace_memberships).permit(:workspace_id, :member_id)
    end
end
