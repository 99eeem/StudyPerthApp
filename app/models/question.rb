class Question < ApplicationRecord
belongs_to :user
belongs_to :post
 belongs_to :parent,  class_name: "Question", optional: true
has_many   :replies, class_name: "Question", foreign_key: :parent_id, dependent: :destroy
validates :content, presence: true, length: { in: 1..1000 }
end