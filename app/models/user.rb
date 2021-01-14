class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, :omniauthable, omniauth_providers: [:google_oauth2, :twitter]

has_many :posts, dependent: :destroy
has_many :likes, dependent: :destroy
has_many :comments, dependent: :destroy
has_many :questions, dependent: :destroy
has_one_attached :image, dependent: :destroy
has_many :liked_posts, through: :likes, source: :post

def liked_by?(post_id)
  likes.where(post_id: post_id).exists?
end
def self.guest
  find_or_create_by!(email: 'guest@example.com') do |user|
    user.password = SecureRandom.urlsafe_base64


  end
end


def self.from_omniauth(auth)
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.provider = auth.provider
    user.uid = auth.uid
    user.name = auth.name
    user.email = auth.info.email
    user.password = Devise.friendly_token[0, 20] # ランダムなパスワードを作成
    user.user_image = auth.info.image.gsub("_normal","") if user.provider == "twitter"
    user.user_image = auth.info.image if user.provider == "google_oauth2"
  end
end
end
