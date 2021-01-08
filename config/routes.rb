Rails.application.routes.draw do
 
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks',
  :registrations=> 'users/registrations',
}



 devise_scope :user do
    get "/users"=>'users/registrations#new'
    get "/users/sign_in"=>'users/registrations#new'
   
  end
  get"users/:id/show"=>"users#show", as: 'profile_show'
  get"users/:id/edit"=>"users#edit", as: 'profile_edit'
  post"users/:id/update"=>"users#update",as: 'profile_update'

  
   post 'like/:id' => 'likes#create', as: 'create_like'
   delete 'like/:id' => 'likes#destroy', as: 'destroy_like'
 
   

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :posts, except:[:index] do
    resources :comments, only:[:create, :destroy]
    resources :questions, only:[:create, :destroy]
    post "questions/:id/response"=>"questions#change", as:"response_create"
    post "questions/:id/reply"=>"questions#reply", as:"reply_create"
  end
  post "post/search"=>"posts#search", as:"search"
  
 
  get "/"=> "home#top"

  root to:"home#top"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm

end