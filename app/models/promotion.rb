class Promotion < ActiveRecord::Base
  belongs_to :user
  belongs_to :formation
end
