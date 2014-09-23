class Promotion < ActiveRecord::Base
  belongs_to :user
  belongs_to :formation

    def self.promos
        Student.all.each do |s|
            Promotion.create(user: s, formation: Formation.first, promo_date: "01-09-2014".to_date)
        end
    end
end
