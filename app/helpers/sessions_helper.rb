module SessionsHelper
    require 'rest_client'
    def redirect_back_or
        unless session[:return_to].nil?
            session.delete(:return_to)
            redirect_to session[:return_to]
        end
    end

    #store current url
    def store_location
        session[:return_to] = request.url if request.get?
    end

    #login user
    #params email
    #params password
    def login_session_user(user_params)
        @response = @rest['sessions/create_user'].post user_params
        @response = JSON.parse(@response)
        unless @response['errors']
            session[:email] = @response['student']['email']
            session[:authentication_token] = @response['student']['authentication_token']
        end
        @response['errors'] ? false : @response
    end

    #check if user is login
    def user_signed_in?
        begin
           @response =  @rest['sessions/signed_in'].get
        rescue Exception
            if @response
                @response = JSON.parse(@response)
            end
        end
    end

    #get user profile
    def user_profile
        @response = JSON.parse(@rest['users/profile'].get)
    end

    #update user profile
    def user_update_profile(user)
        @user = user
        @user = {user: @user}
        @rest['users/update_profile'].put @user
    end
    
    #get all the promotion from current user
    def get_formation_users
        @rest['users/users_formation'].get
    end

    def is_admin?
        @response = JSON.parse(@rest['sessions/is_admin'].get)
        @response["is_admin"]
    end

    #header to send for all request
    def get_header
        {'X-User-Email' => session[:email], 'X-User-Token' => session[:authentication_token]}
    end
end