# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

WorkspaceMembership.destroy_all
User.destroy_all
Task.destroy_all
Project.destroy_all
Workspace.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')
ActiveRecord::Base.connection.reset_pk_sequence!('tasks')
ActiveRecord::Base.connection.reset_pk_sequence!('workspace_memberships')


User.create([
    {name: 'Ernie Man', email:'ernie@test.com', password: 'password'},
    {name: 'Andrew', email:'andrew@test.com', password: 'password'},
    {name: 'Owen', email:'owem@test.com', password: 'password'},
    {name: 'Alia Shafi', email:'alia@test.com', password: 'password'},
])
Workspace.create([
    {name: 'Workspace One'},
    {name: 'Workspace Two'},
    {name: 'Workspace Three'},
])
#WorkspaceMembership.create([
#    {member_id: 1, workspace_id: 1, is_admin: true},
#    {member_id: 3, workspace_id: 1, is_admin: false},
#    {member_id: 2, workspace_id: 2, is_admin: true},
#    {member_id: 4, workspace_id: 3, is_admin: true},
#    {member_id: 1, workspace_id: 3, is_admin: false},
#    {member_id: 2, workspace_id: 3, is_admin: false},
#])

Project.create([
    {name: 'Develop Hipcamp', owner_id: 1, workspace_id: 1},
    {name: 'Develop Strava', owner_id: 4, workspace_id: 3},
    {name: 'MERN Stack', owner_id: 4, workspace_id: 3},
    {name: 'Hipcamp Fullstack', owner_id: 2, workspace_id: 2},
])

Task.create([
    {name: 'Create Design Docs', creator_id: 4, workspace_id: 3, project_id: 2, due_on: '2019-09-01'},
    {name: 'Complete backend for feature one', creator_id: 4, workspace_id: 3, project_id: 2, due_on: '2019-09-03'},
    {name: 'Complete CSS Strava', creator_id: 4, workspace_id: 3, project_id: 2, due_on: '2019-09-20'},
    {name: 'Setup AWS', creator_id: 4, workspace_id: 3, project_id: 2, due_on: '2019-09-17'},
    {name: 'Design Wireframes', creator_id: 4, workspace_id: 3, project_id: 3, due_on: '2019-09-25'},
    {name: 'Complete Route Plans', creator_id: 4, workspace_id: 3, project_id: 3, due_on: '2019-09-26'},
    {name: 'Build out backend database', creator_id: 4, workspace_id: 3, project_id: 3, due_on: '2019-09-28'},

    {name: 'Create Design Docs', creator_id: 1, workspace_id: 1, project_id: 1, due_on: '2019-09-16'},
    {name: 'Complete backend for feature one', creator_id: 1, workspace_id: 1, project_id: 1, due_on: '2019-09-03'},
    {name: 'Complete CSS for Hipcamp', creator_id: 1, workspace_id: 1, project_id: 1, due_on: '2019-09-20'},
    {name: 'Setup AWS', creator_id: 1, workspace_id: 1, project_id: 1, due_on: '2019-09-18'},

])