class Comment < ApplicationRecord
  validates :content, presence: true
  belongs_to :user
  belongs_to :post
validates :content, presence: true, length: { in: 1..1000 }
end
