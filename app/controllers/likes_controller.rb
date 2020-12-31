class LikesController < ApplicationController
before_action :set_post
  def create
   Like.create(post_id: params[:id], user_id: current_user.id)  
   render :create
  end

 def destroy
   Like.find_by(user_id: current_user.id, post_id: params[:id]).destroy
   render :destroy

 end


 private
 def set_post 
  @post=Post.find(params[:id])



 end
 def like_params 
  params.require(:like).permit(post_id: params[:id]).merge(user_id: current_user.id)

 end
end
