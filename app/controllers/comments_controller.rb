class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    #投稿に紐づいたコメントを作成
    @comment = @post.comments.create(comment_params)

    @comment.save
    render :index

  end
  def destroy
    @comment=Comment.find_by(user_id: current_user.id, post_id: params[:id])
    @comment.destroy
    render :index
  end


private 
def comment_params
  params.require(:comment).permit(:content, :post_id).merge(user_id: current_user.id)
end
end