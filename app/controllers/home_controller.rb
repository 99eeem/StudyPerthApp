class HomeController < ApplicationController
  def  top
    @post=Post.all.order(id: "DESC") 
    @post2 = Post.includes(:liked_users).sort {|a,b| b.liked_users.size <=> a.liked_users.size}
    @post3=Post.where(post_type: 2).order(id: "DESC");
    
  end


end
