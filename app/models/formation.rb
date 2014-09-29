class Formation < ActiveRecord::Base
    has_many :promotions
    has_many :users, through: :promotions
    has_many :timesheets
end
