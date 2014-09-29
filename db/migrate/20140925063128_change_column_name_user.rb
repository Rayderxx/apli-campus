class ChangeColumnNameUser < ActiveRecord::Migration
  def change
    rename_table :user_ucps, :users
  end
end
