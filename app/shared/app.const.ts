/**
 * Group routes of the app 
 */
export class AppRouteConst {
    static BASE_URL = "http://localhost:64634/api";
    /**
     * Project routes
     */
    static ADD_PROJECT = AppRouteConst.BASE_URL + "/ProjectApi/Add";
    static LIST_PROJECT = AppRouteConst.BASE_URL + "/ProjectApi/List";
    /**
     * Accepts: projectView as agrgument for Save,  Method: Post
     * Accepts: projectId:int as argument for fetch,Method: Get then add '?id=N' 
     */
    static EDIT_PROJECT = AppRouteConst.BASE_URL + "/ProjectApi/Edit";

    /**
     * Auth routes 
     */
    static CHECK_CREDENTIALS = AppRouteConst.BASE_URL + "/AccountApi/CheckCredentials";
    static VERIFY = AppRouteConst.BASE_URL + "/AccountApi/Verify";
    static REGISTER = AppRouteConst.BASE_URL + "/AccountApi/Register";

    /**
     * Notification routes 
     */
    static LIST_NOTIFICATION = AppRouteConst.BASE_URL + "/NotificationApi/all";
    static SEEN_UNSEEN_NOTIFICATION = AppRouteConst.BASE_URL + "/NotificationApi/SeenUnseen";
    static MARK_DELETED_NOTIFICATION = AppRouteConst.BASE_URL + "/NotificationApi/MarkDeleted";


    /**
     * Task routes 
     */
    static GET_TASK = AppRouteConst.BASE_URL + "/TaskApi/Get";
    static TASKBOARD_TASK = AppRouteConst.BASE_URL + "/TaskApi/Taskboard";
    static PLAN_FOR_CURRENT_DAY_TASK = AppRouteConst.BASE_URL + "/TaskApi/PlanTaskForCurrentDay";
    static ADD_TASK = AppRouteConst.BASE_URL + "/TaskApi/Add";
    static CHANGE_STATE_TASK = AppRouteConst.BASE_URL + "/TaskApi/ChangeTaskState";
    static POSTPONE_TASK = AppRouteConst.BASE_URL + "/TaskApi/Postpone";
    static GENERATE_TASK_FROM_ISSUE_TASK = AppRouteConst.BASE_URL + "/TaskApi/GenetateTaskFromIssue";

    /**
     * Timeline routes 
     */
    static BYPROJECT_TIMELINE = AppRouteConst.BASE_URL + "/TimelineApi/ByProject";

    /**
     * Issue routes
     */
    static ALL_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/GetAll";
    static ADD_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/Add"; /* Get|Post */
    static OPEN_CLOSE_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/OpenCloseIssue";



    /**
     * Dashboard
     */
    static ALL_DASHBOARD = AppRouteConst.BASE_URL + "/DashboardApi/GetAll";

}