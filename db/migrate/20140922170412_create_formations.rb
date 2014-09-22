class CreateFormations < ActiveRecord::Migration
  def change
    create_table :formations do |t|
      t.string :name
      t.references :site, index: true
      t.timestamps
    end
  end
end
