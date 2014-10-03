class User < ActiveRecord::Base
    attr_accessor :first_name, :last_name, :email, :type, :roles, :authentication_token
    def self.columns() @columns ||= []; end
 
    def self.column(name, sql_type = nil, default = nil, null = true)
        columns << ActiveRecord::ConnectionAdapters::Column.new(name.to_s, default, sql_type.to_s, null)
    end
    column :email, :string
    column :type, :string
    column :roles, :array
    column :password, :string
    column :first_name, :string
    column :last_name, :string
    column :information_id, :string

    has_one :information
    accepts_nested_attributes_for :information
end
