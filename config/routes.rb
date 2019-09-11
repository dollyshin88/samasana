Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create] do
      resources :workspaces, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    
    resources :workspaces, only: [:create, :update, :show, :destroy]
    resources :workspace_memberships, only: [:create, :destroy]
  end
end
