
class Admin::AdminController < ApplicationController
    layout 'admin'
    before_action :user_is_admin

    def index
    end
    def user_is_admin
        render json: {errors: 'unauthorized access'}  unless is_admin? 
    end
end