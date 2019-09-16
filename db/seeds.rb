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



user1 = User.create({name: 'Ernie Man', email:'ernie@test.com', password: 'password'})
workspace1 = Workspace.create({name: 'Workspace One'})
wk_mem1 = WorkspaceMembership.create({member_id: user1.id, workspace_id: workspace1.id, is_admin: true})

user2 = User.create({name: 'Alia Shafi', email:'alia@test.com', password: 'password'})
workspace2 = Workspace.create({name: 'Workspace Two'})
wk_mem2 = WorkspaceMembership.create({member_id: user2.id, workspace_id: workspace2.id, is_admin: true})

user3 = User.create({name: 'Owen', email:'owem@test.com', password: 'password'})
workspace3 = {name: 'Workspace Three'}
wk_mem3 = WorkspaceMembership.create({member_id: user3.id, workspace_id: workspace3.id, is_admin: true})

wk_mem4 = WorkspaceMembership.create({member_id: user1.id, workspace_id: workspace2.id, is_admin: false})
wk_mem5 = WorkspaceMembership.create({member_id: user3.id, workspace_id: workspace2.id, is_admin: false})


project1 = Project.create({name: 'Develop Hipcamp', owner_id: user1.id, workspace_id: workspace1.id})
project2 = Project.create({name: 'Develop Strava', owner_id: user2.id, workspace_id: workspace2.id})
project3 = Project.create({name: 'MERN Stack', owner_id: user2.id, workspace_id: workspace2.id})
project4 = Project.create({name: 'Depop Fullstack', owner_id: user3.id, workspace_id: workspace3.id})


Task.create([
    {name: 'Create Design Docs', creator_id: user2.id, workspace_id: workspace2.id, project_id: project2.id, due_on: '2019-09-01'},
    {name: 'Complete backend for feature one', creator_id: user2.id, workspace_id: 3, project_id: project2.id, due_on: '2019-09-03'},
    {name: 'Complete CSS Strava', creator_id: user2.id, workspace_id: workspace2.id, project_id: project2.id, due_on: '2019-09-20'},
    {name: 'Setup AWS', creator_id: user2.id, workspace_id: workspace2.id, project_id: project2.id, due_on: '2019-09-17'},
    {name: 'Design Wireframes', creator_id: user2.id, workspace_id: workspace2.id, project_id: project3.id, due_on: '2019-09-25'},
    {name: 'Complete Route Plans', creator_id: user2.id, workspace_id: workspace2.id, project_id: project3.id, due_on: '2019-09-26'},
    {name: 'Build out backend database', creator_id: user2.id, workspace_id: workspace2.id, project_id: project3.id, due_on: '2019-09-28'},

    {name: 'Create Design Docs', creator_id: user1.id, workspace_id: workspace1.id, project_id: project1.id, due_on: '2019-09-16'},
    {name: 'Complete backend for feature one', creator_id: user1.id, workspace_id: workspace1.id, project_id: project1.id, due_on: '2019-09-03'},
    {name: 'Complete CSS for Hipcamp', creator_id: user1.id, workspace_id: workspace1.id, project_id: project1.id, due_on: '2019-09-20'},
    {name: 'Setup AWS', creator_id: user1.id, workspace_id: workspace1.id, project_id: project1.id, due_on: '2019-09-18'},

])