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
    Executor: number;
    Project: number;
    EditAt: string;
}