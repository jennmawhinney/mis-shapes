# == Schema Information
#
# Table name: loops
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Loop < ActiveRecord::Base
end
