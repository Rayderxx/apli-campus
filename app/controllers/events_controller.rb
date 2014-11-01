class EventsController < ApplicationController
 def index
    render json: get_events
 end
end