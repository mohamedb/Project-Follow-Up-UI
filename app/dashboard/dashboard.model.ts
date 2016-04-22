import {MatrixModel} from "./matrix/matrix.model";

export class DashboardModel {
    CurrentTasks: Array<any> = [];
    OtherTasks: Array<any> = [];
    TodayDoneTasks: Array<any> = [];
    MatrixVM: MatrixModel = new MatrixModel();
    IsWorkingDayOver:boolean= false;
    Consts: any = {ListConsts: []};
}