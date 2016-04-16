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

    /**
     * Task routes 
     */
    static GET_TASK = AppRouteConst.BASE_URL + "/TaskApi/Get";
    static TASKBOARD_TASK = AppRouteConst.BASE_URL + "/TaskApi/Taskboard";
    //Supprot GET && POST
    static ADD_TASK = AppRouteConst.BASE_URL + "/TaskApi/Add"; 
    static CHANGE_STATE_TASK = AppRouteConst.BASE_URL + "/TaskApi/ChangeTaskState"; 
    /**
     * Task routes 
     */
    static BYPROJECT_TIMELINE = AppRouteConst.BASE_URL + "/TimelineApi/ByProject";
    
    /**
     * Issue routes
     */
    static ALL_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/GetAll";
    static ADD_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/Add"; /* Get|Post */
    static OPEN_CLOSE_ISSUE = AppRouteConst.BASE_URL + "/IssueApi/OpenCloseIssue"; 
    
    
}