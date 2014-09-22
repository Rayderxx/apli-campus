class CreateSalleRooms < ActiveRecord::Migration
  def change
    create_table :salle_rooms do |t|
      t.string :code
      t.references :site, index: true

      t.timestamps
    end
  end
end
