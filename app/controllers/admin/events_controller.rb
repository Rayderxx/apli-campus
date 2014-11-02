class Admin::EventsController < Admin::AdminController
 def index
 end

 def create
 	@response = @rest['admin/events'].post
 end

 def edit
 end

 def destroy
 end

 private
        def event_params
            params.require(:events).permit(:description, :date_start, :date_end)
        end

end

