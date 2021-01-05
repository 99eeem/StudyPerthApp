class LikesController < ApplicationController
before_action :set_post
  def create
    @like = current_user.likes.build(post_id: @post.id)
   @like.save
 
  end

 def destroy
  @like = Like.find_by(post_id: @post.id, user_id: current_user.id)
  @like.destroy
   

 end


 private
 def set_post 
  @post=Post.find(params[:id])



 end
 def like_params 
  params.require(:like).permit(post_id: params[:id]).merge(user_id: current_user.id)

 end
end
