# Backend Routes
## HTML
  * `GET /` `StaticPagesController#root`

## API Endpoints
### `users`
  * `POST /api/users` - sign up

### `session`
  * `POST /api/session` - log in
  * `DELETE /api/session` - log out

### `tasks`
  * `GET /api/tasks` - returns all tasks assigned to the current user
  * `GET /api/tasks/:id` - returns a specific task with tags/taggins and likings and followings
  * `GET /api/users/:user_id/tasks` - returns all tasks assigned to the current user
  * `GET /api/projects/:project_id/tasks` - returns all tasks associated with a given project
  * `GET /api/sections/:section_id/tasks` - returns all tasks associated with a given project
  * `POST /api/tasks` - adds task
  * `PATCH /api/tasks/:id` - edits task
  * `DELETE /api/tasks/:id` - removes task

### `sections`
  * `GET /api/projects/:project_id/sessions` - returns all sections for the project 
  * `GET /api/sections/:id` - returns a specific section 
  * `POST /api/sections` - adds section
  * `PATCH /api/sections/:id` - edits section
  * `DELETE /api/sections/:id` - removes section

### `projects`
  * `GET /api/projects/:workspace_id` - returns all projects for the workspace 
  * `GET /api/projects/:id` - returns a specific project 
  * `POST /api/:workspace_id/projects` - adds project
  * `PATCH /api/projects/:id` - edits project
  * `DELETE /api/projects/:id` - removes project

### `workspaces`
  * `GET /api/workspaces` - returns all workspaces IDs for the current user
  * `GET /api/workspaces/:id` - returns a specific workspace
  * `POST /api/workspaces` - adds workspace for the current user
  * `DELETE /api/workspaces/:id` - removes workspaces

### `workspace_memberships`
  * `GET /api/workspace_memberships/:workspace_id` - returns all memberships associated with the workspace

### `tags`
  * `GET /api/tags/:workspace_id` - returns all tags associated with the current workspace
  * `GET /api/tags/:id` - returns a specific tag 
  * `POST /api/:workspace_id/tags` - adds tag
  * `PATCH /api/tags/:id` - edits tag
  * `DELETE /api/tags/:id` - removes tag

