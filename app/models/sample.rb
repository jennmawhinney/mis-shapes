# == Schema Information
#
# Table name: samples
#
#  id         :integer          not null, primary key
#  title      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Sample < ActiveRecord::Base
end
