class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id
      t.string :title
      t.string :image
      t.string :location
      t.string :text
      t.integer :post_type

      t.timestamps
    end
  end
end
