# DATABASE SCHEMA

## `users`

| **column name**   | **data type** | **details**               |
| ----------------- | ------------- | ------------------------- |
| `id`              | integer       | not null, primary key     |
| `name`            | string        | not null                  |
| `email`           | string        | not null, unique, indexed |
| `password_digest` | string        | not null                  |
| `session_token`   | string        | not null, unique, indexed |
| `created_at`      | datetime      | not null                  |
| `updated_at`      | datetime      | not null                  |
| `profile_img`     |               |                           |

- indexed on `email, unique: true`
- indexed on `session_token, unique: true`

## `tasks`

| **column name**   | **data type** | **details**                       |
| ----------------- | ------------- | --------------------------------- |
| `id`              | integer       | not null, primary key             |
| `name`            | string        | not null                          |
| `notes`           | text          | optional                          |
| `creator_id`      | integer       | not null, foreign key, indexed    |
| `assignee_id`     | integer       | not null, foreign key, indexed    |
| `assignee_status` | string        | not null, default: inbox, indexed |
| `created_at`      | datetime      | not null                          |
| `completed`       | boolean       | default false                     |
| `completed_at`    | datetime      | optional                          |
| `due_on`          | datetime      | optional, indexed                 |
| `start_on`        | datetime      | optional                          |
| `modified_at`     | datetime      | not null                          |
| `project_id`      | integer       | not null, foreign key             |
| `workspace_id`    | integer       | not null, foreign key, indexed    |
| `parent_task_id`  | integer       | foreign key, indexed              |

- values allowed for assignee_status: inbox, today, upcomning, later
- indexed on `assignee_id`
- indexed on `assignee_status`
- indexed on `due_on`
- indexed on `parent_task_id`
- indexed on `workspace_id`
- `assignee_id` references `users`
- `workspace_id` references `workspaces`
- `parent_task_id` references `tasks`

## `sections`

| column name       | data type | details               |
| ----------------- | --------- | --------------------- |
| id                | integer   | not null, primary key |
| name              | string    | not null              |
| project_id        | integer   | not null, foreign key |
| order [tentative] | integer   | not null              |
| created_at        | datetime  | not null              |
| modified_at       | datetime  | not null              |

- indexed on `project_id`
- `project_id` references projects

## `projects`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `color`         | string        | optional                       |
| `notes`         | text          | optional                       |
| `name`          | string        | not null                       |
| `owner_id`      | integer       | not null, foreign key, indexed |
| `workspace_id`  | integer       | not null, foreign key, indexed |
| `due_on`        | datetime      | optional, indexed              |
| `start_on`      | datetime      | optional                       |
| `layout`        | string        | not null                       |
| `created_at`    | datetime      | not null                       |
| `modified_at`   | datetime      | not null                       |

- indexed on `owner_id`
- indexed on `workspace_id`
- indexed on `due_on`
- `owner_id` references `users`
- `workspace_id` references `workspaces`
- values allowed for color: dark-pink, dark-green, dark-blue, dark-red, dark-teal, dark-brown, dark-orange, dark-purple, dark-warm-gray, light-pink, light-green, light-blue, light-red, light-teal, light-yellow, light-orange, light-purple, light-warm-gray

## `workspaces`

| **column name** | **data type** | **details**           |
| --------------- | ------------- | --------------------- |
| `id`            | integer       | not null, primary key |
| `name`          | string        | not null, indexed     |
| `created_at`    | datetime      | not null              |
| `updated_at`    | datetime      | not null              |

- indexed on `name, unique: true`

## `workspace_memberships`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `member_id`     | integer       | not null, foreign key, indexed |
| `workspace_id`  | integer       | not null, foreign key, indexed |
| `is_admin`      | boolean       | not null                       |

- indexed on `[member_id, workspac_id], unique: true`
- `workspace_id` references `workspaces`
- `member_id` references `users`

## `tags`

| **column name** | **data type** | **details**           |
| --------------- | ------------- | --------------------- |
| `id`            | integer       | not null, primary key |
| `name`          | string        | not null, indexed     |
| `color`         | string        | not null              |
| `workspace_id`  | string        | not null              |
| `created_at`    | datetime      | not null              |
| `updated_at`    | datetime      | not null              |

- indexed on `name, unique: true`
- indexed on `[name, workspace_id], unique: true`
- `workspace_id` references `workspaces`

## `taggings`

| **column name** | **data type** | **details**           |
| --------------- | ------------- | --------------------- |
| `id`            | integer       | not null, primary key |
| `tag_id`        | integer       | foreign key, indexed  |
| `task_id`       | integer       | foreign key, indexed  |

- indexed on `[tag_id, task_id], unique: true`
- `tag_id` references `tags`
- `task_id` references `tasks`

## `task_likings`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `task_id`       | integer       | not null, foreign key, indexed |
| `user_id`       | integer       | not null, foreign key, indexed |

- indexed on `[task_id, user_id], unique: true`
- `task_id` references `tasks`
- `user_id` references `users`

## `task_followings`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `task_id`       | integer       | not null, foreign key, indexed |
| `user_id`       | integer       | not null, foreign key, indexed |

- indexed on `[task_id, user_id], unique: true`
- `task_id` references `tasks`
- `user_id` references `users`

# BONUS

## `comments`

| **column name** | **data type** | **details**                           |
| --------------- | ------------- | ------------------------------------- |
| `id`            | integer       | not null, primary key                 |
| `author_id`     | integer       | not null, foreign key (User), indexed |
| `body`          | text          | not null                              |
| `created_at`    | datetime      | not null                              |
| `modified_at`   | datetime      | not null                              |

- indexed on `author_id`
- `author_id` references `users`

## `comment_likings`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `comment_id`    | integer       | not null, foreign key, indexed |
| `user_id`       | integer       | not null, foreign key, indexed |

- indexed on `[comment_id, user_id], unique: true`
- `comment_id` references `comments`
- `user_id` references `users`

## `tag_followings`

| **column name** | **data type** | **details**                    |
| --------------- | ------------- | ------------------------------ |
| `id`            | integer       | not null, primary key          |
| `tag_id`        | integer       | not null, foreign key, indexed |
| `user_id`       | integer       | not null, foreign key, indexed |

- indexed on `[tag_id, user_id], unique: true`
- `tag_id` references `tags`
- `user_id` references `users`
