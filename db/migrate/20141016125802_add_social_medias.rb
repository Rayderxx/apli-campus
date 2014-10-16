class AddSocialMedias < ActiveRecord::Migration
  def change
      add_column :information, :facebook, :string
      add_column :information, :twitter, :string
      add_column :information, :linkedin, :string
  end
end
