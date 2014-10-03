class Information < ActiveRecord::Base
    attr_accessor :description, :phone, :updated_at, :created_at
    def self.columns() @columns ||= []; end
 
    def self.column(name, sql_type = nil, default = nil, null = true)
        columns << ActiveRecord::ConnectionAdapters::Column.new(name.to_s, default, sql_type.to_s, null)
    end

    belongs_to :user

    column :description, :string
    column :phone, :string
    column :user_id, :int
    column :created_at, :string
    column :updated_at, :sting
end
