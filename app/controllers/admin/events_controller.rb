class Admin::EventsController < Admin::AdminController
    def index
    end
    def create
 	  @response = @rest['admin/events'].post event_params
      render json: JSON.parse(@response)
    end

    def events
        @response = @rest['admin/events'].get
        render json: JSON.parse(@response)
    end

    def edit
    end

    def update
        url = "admin/events/#{params[:id]}"
        @response = @rest[url].put event_params
        render json: JSON.parse(@response)
    end

    def destroy
        data = {params: params[:id]}
        @response = @rest["admin/events/destroy_event"].post data
        render json: JSON.parse(@response)
    end

    private
        def event_params
            params.require(:event).permit(:id, :description, :dateStart, :timeStart, :dateEnd, :timeEnd)
        end
end

