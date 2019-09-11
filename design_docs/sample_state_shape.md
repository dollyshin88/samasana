# SAMPLE STATE

```js
{
    entities: {
        workspaces: {
            1: {
                id: 1,
                name: 'Software Development'
            }
        },
        workspace_memberships: {
            1: {
                id: 1,
                member_id: 2,
                workspace_id: 1,
                is_admin: true
            },
            2: {
                id: 2,
                member_id: 3,
                workspace_id: 1,
                is_admin: false
            }
        }
        projects: {
            1: {
                id: 1,
                color: 'dark-blue',
                notes: 'about this project...',
                name: 'fullstack clone',
                owner_id: 2,
                workspace_id: 1,
                due_on: '2019-10-26',
                start_on: '2019-8-26',
                layout: 'board'
            }
        },
        tasks: {
            1: {
                id: 1,
                name: 'design database structure',
                notes: '',
                assignee: 2,
                assignee_status: 'upcoming',
                created_at: '2019-8-26',
                completed: false,
                completed_at: null,
                due_on: '2019-10-26',
                start_on: '2019-8-26',
                project_id: 1,
                workspace_id: 1,
                parent_task_id: null
            }
        },
        subtasks:{
            4: {
                id: 4,
                name: 'create schema',
                notes: 'refer to resources',
                assignee: 2,
                assignee_status: 'upcoming',
                created_at: '2019-8-26',
                completed: false,
                completed_at: null,
                due_on: '2019-10-26',
                start_on: '2019-8-26',
                project_id: 1,
                workspace_id: 1,
                parent_task_id: 1
            }
        } ,
        users: {
            1: {
                id: 1,
                name: 'Mary McMuffin',
                email: "mary.m@email.com",
            }
        },
        tags: {
            1: {
                id: 1,
                name: 'redux',
                color: 'dark-green',
                workspace_id: 1
            }
        },
        task_followings: {
            1:{
                id: 1,
                task_id: 4,
                user_id: 2
            }
        },
        task_likings: {
            1: {
                id: 1,
                task_id: 4,
                user_id: 1
            }
        }
    },
    ui: {
        loading: true/false
    },
    errors: {
        session: ["Incorrect username/password combination"],
    },
    session: {
        currentUserId: 1
    }
}

```

