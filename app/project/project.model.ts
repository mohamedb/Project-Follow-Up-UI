/**
 string Name { get; set; }
 DateTime StartAt { get; set; }
 DateTime EndAt { get; set; }
 int Id { get; set; }
 string Benifite { get; set; }
 string Objective { get; set; }
 */
export class ProjectModel {

    id: number = 0;
    name:string;
    startAt:any = new Date();
    endAt:any= new Date();
    benifite:string;
    objective:string;
    
}