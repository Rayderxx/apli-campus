module SessionsHelper
    require 'rest_client'
    def redirect_back_or(login)
        session.delete(:return_to)
    end

    def store_location
        session[:return_to] = request.url if request.get?
    end

    def login_session_user(user_params)
        @response = RestClient.post 'http://10.40.74.28:3000/sessions', {:params => user_params}
        @response = JSON.parse(@response)
        unless @response['errors']
            session[:email] = @response['student']['email']
            session[:authentication_token] = @response['student']['authentication_token']
        end
        @response['errors'] ? false : @response
    end

    def signed_in?
        begin
            RestClient::Request.execute(
                method: :get,
                url: 'http://10.40.74.28:3000/sessions/signed_in',
                headers: self.get_header
            )
        rescue Exception
            if @response
                @response = JSON.parse(@response)
                @response['user_signed_in']
            end
        end
    end
    
    def get_formation_users
         return RestClient::Request.execute(
             method: :get,
             url: 'http://localhost:3000/users/users_formation',
             headers: self.get_header
         )
    end

    def get_header
        {'X-User-Email' => session[:email], 'X-User-Token' => session[:authentication_token]}
    end
end