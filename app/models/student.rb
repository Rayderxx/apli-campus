class Student < User
    #get the list of promo
    has_many :promotions
    has_many :formations, through: :promotions

end
