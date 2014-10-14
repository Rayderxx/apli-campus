class UsersController < ApplicationController

    def index

    end

    def show
    end

    def create
    end

    def edit
    end

    def update

    end

    def destroy
    end

    def formation_users
        render json: get_formation_users
    end

    def edit_profile
        @user_profile = user_profile['student'].symbolize_keys!
        @profile = User.new(email: @user_profile[:email])
        @information = Information.new(@user_profile[:information])    
    end

    def update_profile
        @profile = User.new(user_params)
        if @profile.valid?
            user_update_profile(user_params)
            redirect_to :back
        else
            render 'edit_profile_path'
        end
    end

    private
        def user_params
            params.require(:user).permit(:email, information_attributes: [:description, :phone])
        end
end