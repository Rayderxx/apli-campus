class SessionsController < ApplicationController
    def login
        @user = User.new
    end

    def create
        @user = User.new(user_params)
        login = login_session_user(user_params)
        unless login
            render 'login'
        end

        redirect_to root_path
    end

    def header
        render json: {"X-User-Email" => session[:email], "X-User-Token" => session[:authentication_token]}
    end

    def destroy
#        log_out
        redirect_to root_url
    end

    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end