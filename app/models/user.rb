# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string
#  email           :string
#  image_url       :string
#  password_digest :string
#  admin           :boolean          default("false")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

  has_secure_password
  validates :email, :presence => true, :uniqueness => true
  # ^^ can't enter password without email address, must be unique

end
