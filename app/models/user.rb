class User < ActiveRecord::Base
    before_create :create_role
    rolify
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable and :omniauthable
    devise :database_authenticatable, :registerable,
           :recoverable, :rememberable, :trackable, :validatable
    #relationships

    #user information
    has_one :information
    has_many :promotions
    has_many :formations, through: :promotion

    def create_role
        self.add_role self.type.downcase.to_sym
    end
end
