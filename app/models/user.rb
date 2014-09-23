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

    def create_role
        self.add_role self.type.downcase.to_sym
    end
end
