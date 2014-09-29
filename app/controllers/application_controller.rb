class ApplicationController < ActionController::Base
    include SessionsHelper
    before_action :signed_in_user, :except => [:login, :create]
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
    protect_from_forgery with: :exception

    def signed_in_user
        unless signed_in?
            store_location
            @user = User.new
            redirect_to login_sessions_path , notice: "Please sign in."
        end
    end
end
