class Post < ApplicationRecord
  validates :title, presence: true,  length: { minimum: 1, maximum: 20}
  validates :text, presence: true
  validates :images, presence: true
  validates :post_type, presence: true
  validates :address, presence: true
  geocoded_by :address
  after_validation :geocode
  has_many_attached :images
  belongs_to :user
  has_many :likes, dependent: :destroy
  has_many :liked_users, through: :likes, source: :user
  has_many :comments, dependent: :destroy
  has_many :questions, dependent: :destroy
  has_one :spot

end
