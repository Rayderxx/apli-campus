class AddAdressSites < ActiveRecord::Migration
  def change
    add_column :sites, :adress, :text
    add_column :sites, :geo,    :text 
  end
end
