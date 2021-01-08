class RemoveReviewToSpot < ActiveRecord::Migration[5.2]
  def change
    remove_foreign_key :spots, :review_id_id
    remove_index :spots, :review_id_id
    remove_column :spots, :review_id_id, :integer
  end
end
