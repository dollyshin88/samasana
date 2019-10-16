# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_16_181213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "projects", force: :cascade do |t|
    t.string "name", null: false
    t.integer "owner_id", null: false
    t.integer "workspace_id", null: false
    t.string "color", null: false
    t.date "due_on"
    t.date "start_on"
    t.string "layout", default: "software implementation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "notes", default: ""
    t.index ["owner_id", "name"], name: "index_projects_on_owner_id_and_name", unique: true
    t.index ["workspace_id", "name"], name: "index_projects_on_workspace_id_and_name", unique: true
  end

  create_table "sections", force: :cascade do |t|
    t.string "name", null: false
    t.integer "project_id", null: false
    t.integer "order", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tasks", force: :cascade do |t|
    t.string "name", null: false
    t.integer "creator_id", null: false
    t.integer "assignee_id"
    t.string "assignee_status"
    t.boolean "completed", default: false
    t.date "completed_at"
    t.date "due_on"
    t.date "start_on"
    t.integer "project_id"
    t.integer "workspace_id", null: false
    t.integer "parent_task_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "general_order", null: false
    t.text "notes", default: ""
    t.integer "section_id"
    t.integer "section_order"
    t.index ["assignee_id"], name: "index_tasks_on_assignee_id"
    t.index ["assignee_status"], name: "index_tasks_on_assignee_status"
    t.index ["creator_id"], name: "index_tasks_on_creator_id"
    t.index ["due_on"], name: "index_tasks_on_due_on"
    t.index ["parent_task_id"], name: "index_tasks_on_parent_task_id"
    t.index ["section_id"], name: "index_tasks_on_section_id"
    t.index ["workspace_id"], name: "index_tasks_on_workspace_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.binary "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  create_table "workspace_memberships", force: :cascade do |t|
    t.integer "member_id", null: false
    t.integer "workspace_id", null: false
    t.boolean "is_admin", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["member_id", "workspace_id"], name: "index_workspace_memberships_on_member_id_and_workspace_id", unique: true
    t.index ["member_id"], name: "index_workspace_memberships_on_member_id"
    t.index ["workspace_id"], name: "index_workspace_memberships_on_workspace_id"
  end

  create_table "workspaces", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
