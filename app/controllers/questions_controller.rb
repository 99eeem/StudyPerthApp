class QuestionsController < ApplicationController
  def create
    @post = Post.find(params[:post_id])
    #投稿に紐づいたコメントを作成
    
    @question = @post.questions.create(question_params)

    @question.save
    render :index

  end
  def reply
    @post = Post.find(params[:post_id])
    #投稿に紐づいたコメントを作成
    
    @question = @post.questions.create(reply_params)

    @question.save
    render :index
  end
  def destroy
    @question=Question.find_by(user_id: current_user.id, post_id: params[:id])
    @question.destroy
    render :index
  end
  def change
    @post=Post.find(params[:post_id])
    @question=Question.find(params[:id])
    render "questions/change"

  end


private 
def question_params
  params.require(:question).permit(:content, :post_id, :parent_id).merge(user_id: current_user.id)
end
def reply_params
  params.permit(:content, :post_id, :parent_id).merge(user_id: current_user.id)
end
end
