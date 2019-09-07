## Fontend Routes and Components
### Root Components
`Root`
* `App`
* `WorkspaceHeaderNav`
* `SideNav`
* (main component - based on hash routes)

### Main Component
`/` 
(NOT LOGGED IN)
Redirect to `/samasana`
    * CompanyHomeHeaderNav
    * CompanyHomeMain
`/samasana/signup`
    * SessionForm
`/samasana/login`
    * SessionForm

(LOGGED IN)
Redirect to `/home` 
    * WorkspaceHomeMain
        * ProjectList
            * ProjectThumbnail

`/createproject`
    * ProjectForm

`/project/board`
    * ProjectHeaderNva
    * ProjectMain
        * Sections
            * SectionTaskList

`/project/board/viewtask`
    * TaskDetail(overlay modal) 
    * ProjectHeaderNva
    * ProjectMain
        * Sections
            * SectionTaskList

`/mytasks`
    * TodaySection
        * TaskLists
            * TaskItem
    * UpcomingSection
        * TaskLists
            * TaskItem