export class AppRouteConst {
    static BASE_URL = "http://localhost:64634/api";
    /**
     * Project routes
     */
    static ADD_PROJECT = AppRouteConst.BASE_URL + "/ProjectApi/Add";
    static LIST_PROJECT = AppRouteConst.BASE_URL + "/ProjectApi/List";

    /**
     * Auth routes 
     */
    static CHECK_CREDENTIALS = AppRouteConst.BASE_URL + "/AccountApi/CheckCredentials";
    static VERIFY = AppRouteConst.BASE_URL + "/AccountApi/Verify";
}