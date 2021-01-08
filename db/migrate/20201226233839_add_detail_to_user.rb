class AddDetailToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :stay_period, :date
    add_column :users, :study_period, :date
    add_column :users, :twiiter, :string
    add_column :users, :instagram, :string
    add_column :users, :user_image, :string


  end
end
