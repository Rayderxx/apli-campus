class CreateSessionSigns < ActiveRecord::Migration
  def change
    create_table :session_signs do |t|
      t.datetime :time
      t.references :timesheet
      t.timestamps
    end
  end
end
