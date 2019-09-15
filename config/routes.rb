Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, default: { format: :json } do
    resources :users, only: [:create] do
      
      resources :tasks, only: [:index]
    end

    resource :session, only: [:create, :destroy]
    
    resources :workspaces, only: [:index, :create, :update, :destroy] do
      resources :projects, only: [:index]
      resources :tasks, only: [:index]
      resources :users, only: [:index]
    end
    
    resources :workspace_memberships, only: [:create, :destroy]

    resources :projects, only: [:show, :create, :update, :destroy] do
      resources :tasks, only: [:index]
    end

    resources :tasks, only: [:show, :create, :update, :delete]
  end
end

# to be added: sections --- nest task index 
# & nest section index under projects