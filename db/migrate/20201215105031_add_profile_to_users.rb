class AddProfileToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile, :string
    add_column :users, :user_name, :string
  end
end
