class Admin::AgendasController < Admin::AdminController
    require 'rest_client'
    def index
        RestClient.get 'http://localhost:3000'
    end

    def show
    end

    def new
    end

    def edit
    end

    def update
    end

    def destroy
    end
end
