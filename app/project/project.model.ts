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
    name: string;
    startAt: any = new Date(Date.now() + 1* 24*60*60*1000 );//Add one day!
    endAt: any = new Date(Date.now() + 5* 24*60*60*1000 );
    benifite: string = ` `;
    objective: string = ` `;
}