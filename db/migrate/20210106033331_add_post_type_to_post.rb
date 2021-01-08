class AddPostTypeToPost < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :post_type, :integer
    add_column :posts, :post_type, :string
    remove_column :comments, :parent_id, :integer

  end
end
