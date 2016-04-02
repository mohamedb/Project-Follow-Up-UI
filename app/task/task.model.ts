/**
 * A model that represent a TaskDto
 */
export class TaskModel {
    Id: number = 0;
    Title: string;
    Description: string;
    Done: boolean;
    EstimatedTimeInMinutes: number;
    Urgent: boolean;
    Critical: boolean;
    Postponed: boolean;
    AddAt: string;
    FinishAt: string;
    KeyFactor: boolean;
    StartAt: string;
    EndAt: string;
    DeleteAt: string;
    Deleted: boolean;
    ExecutorId: number;
    ProjectId: number;
    EditAt: string;
    
    //Addtional 
    UsersList:any=[];
    EstimatedMinList :any = [];
    AvailableDates:any=[];
    
    
}