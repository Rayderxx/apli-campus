class CreateInformation < ActiveRecord::Migration
  def change
    create_table :information do |t|
      t.string :description
      t.string :phone
      t.references :user, index: true

      t.timestamps
    end
  end
end
