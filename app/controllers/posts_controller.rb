class PostsController < ApplicationController
  before_action :authenticate_user!, only:[:show]
  def index
    @post=Post.all.order(id: "DESC") 
      @post2 = Post.includes(:liked_users).sort {|a,b| b.liked_users.size <=> a.liked_users.size}
      @post3=Post.where(post_type: 2).order(id: "DESC");

  end

  def new
    @post = Post.new
    
  end
  def create
    @post = Post.create params.require(:post).permit(:text, :title, :post_type, :user_id, :address, :latitude, :longitude, images: []).merge(user_id: current_user.id)#POINT


    if @post.save
    flash[:success]="写真を投稿しました"
    redirect_to(posts_url)
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
    redirect_to posts_path
    else
      render("posts/edit")
    end
  end
  def show
      @post = Post.find(params[:id])
      @comment=Comment.new
      @comments=@post.comments.order(created_at: :ASC)
    
  end
  
  def destroy

    @post=Post.find_by(id: params[:id])
    @post.destroy
    redirect_to posts_path


  end
end

