Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create] do
      
      resources :tasks, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    
    resources :workspaces, only: [:index, :create, :show, :update, :destroy] do
      resources :projects, only: [:index]
      resources :tasks, only: [:index]
      resources :users, only: [:index]
    end
    
    resources :workspace_memberships, only: [:create, :destroy]

    resources :projects, only: [:show, :create, :update, :destroy] do
      resources :tasks, only: [:index]
      resources :sections, only: [:index]
    end

    resources :sections, only: [:index, :create, :update, :destroy]

    resources :tasks, only: [:show, :create, :update, :destroy]

    #custom batch routes
    patch '/batch/section/tasks', to: 'tasks#section_batch'
    patch '/batch/general/:workspace_id/tasks', to: 'tasks#general_batch'
    patch '/batch/:project_id/sections', to: 'sections#batch'
  end
end

# to be added: sections --- nest task index -- maybe not?
# & nest section index under projects