class CreatePromotions < ActiveRecord::Migration
  def change
    create_table :promotions do |t|
      t.datetime :promo_date
      t.references :user, index: true
      t.references :formation, index: true

      t.timestamps
    end
  end
end
