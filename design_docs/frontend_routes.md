## Fontend Routes and Components
## Root Components
### `Root`
* `App`
* `WorkspaceHeaderNav`
* `SideNav`
* (main component - based on hash routes)

## Main Component

### `/` => Redirect to `/samasana` if not logged in
* CompanyHomeHeaderNav
* CompanyHomeMain
### `/samasana/signup`
* SessionForm
### `/samasana/login`
* SessionForm


### `/` => Redirect to `/` if logged in
* WorkspaceHomeMain
  * ProjectList
     * ProjectThumbnail

### `/createProject`
* ProjectForm

### `/project/board`
* ProjectHeaderNva
* ProjectMain
   * Sections
      * SectionTaskList

### `/project/board/viewTask`
* TaskDetail(overlay modal) 
* ProjectHeaderNav
* ProjectMain
   * Sections
      * SectionTaskList

### `/myTasks`
* TodaySection
    * TaskLists
        * TaskItem
* UpcomingSection
    * TaskLists
        * TaskItem