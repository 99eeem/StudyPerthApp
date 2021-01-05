class UsersController < ApplicationController
    def show 
      @user = User.find_by(id: params[:id])
      @post = Post.find_by(user_id: params[:id])
      @questions=Question.where(user_id: @user.id)
      @replies=Question.where(user_id: @user.id).count(:parent_id)
    
  
    end
    def edit
      @user = User.find(params[:id])
    end
    def update
      @user= User.find(params[:id])
      @user.update params.permit(:user_name, :name, :stay_period, :study_period, :twiiter, :instagram, :image, :profile)
      @user.save
      redirect_to profile_show_path(@user.id)
    end
end
