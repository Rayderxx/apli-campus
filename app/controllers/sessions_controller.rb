class SessionsController < ApplicationController
    def login
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        login = login_session_user(user_params)
        debugger
        unless login
            render 'login'
        end
        if login["user"]["roles"].first["name"] == "admin"
            redirect_to admin_path
        else
            redirect_to root_path
        end
    end

    def header
        render json: {"X-User-Email" => session[:email], "X-User-Token" => session[:authentication_token]}
    end

    def destroy
    end

    private
        def user_params
            params.require(:user).permit(:email, :password)
        end
end