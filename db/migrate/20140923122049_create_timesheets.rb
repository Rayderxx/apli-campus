class CreateTimesheets < ActiveRecord::Migration
  def change
    create_table :timesheets do |t|
      t.string :event
      t.datetime :event_time
      t.references :formation
      t.timestamps
    end
  end
end
