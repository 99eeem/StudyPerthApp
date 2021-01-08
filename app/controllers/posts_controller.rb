class PostsController < ApplicationController
  before_action :authenticate_user!, except:[:search]
  layout 'posts'


  def index
    @post=Post.all.order(id: "DESC")
      @post2 = Post.includes(:liked_users).sort {|a,b| b.liked_users.size <=> a.liked_users.size}


  end

  def new
    @post = Post.new

  end
  def create
    @post = Post.create params.require(:post).permit(:text, :title, :post_type, :user_id, :address, :latitude, :longitude, images: []).merge(user_id: current_user.id)#POINT


    if @post.save
    flash[:success]="写真を投稿しました"
    redirect_to root_path
    else
      render(new_post_path)
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update params.require(:post).permit(:text, :title, :type, images: []) # POINT
    if @post.save
      flash[:success]="写真を編集しました"
    redirect_to root_path
    else
      render("posts/edit")
    end
  end
  def show
      @post = Post.find(params[:id])
      @comment= @post.comments.build
      @comment_reply = @post.comments.build
      @comments=@post.comments.order(created_at: :ASC)
      @question= @post.questions.build
      @question_reply = @post.questions.build
      @questions=@post.questions.order(created_at: :ASC)

  end

  def destroy

    @post=Post.find_by(id: params[:id])
    @post.destroy
    redirect_to root_path


  end
  def search
    @posts=Post.where(post_type: params[:post_type]).order(id: "DESC")
    render "posts/post_type"



  end

end
