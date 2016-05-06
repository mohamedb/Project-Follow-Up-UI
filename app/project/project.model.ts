/**
 string Name { get; set; }
 DateTime StartAt { get; set; }
 DateTime EndAt { get; set; }
 int Id { get; set; }
 string Benifite { get; set; }
 string Objective { get; set; }
 */
export class ProjectModel {

    Id: number = 0;
    Name: string;
    StartAt: any = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);//Add one day!
    EndAt: any = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000);
    Benifite: string = ` `;
    Objective: string = `   `;

    constructor() {
        this.Benifite = `Greatest properly off ham exercise all. Unsatiable invitation its possession nor off. 
                         All difficulty estimating unreserved increasing the solicitude. 
                          departure end bed attention unfeeling. On unpleasing principles alteration of.
                           Be at performed preferred determine `;
        this.Objective = `I had a lot more to say and a lot more examples, but this went on way longer than I expected already. Perhaps I'll revisit this topic at a future date, as I know it's one that's constantly being addressed.
                          nd we hope to continue to bring you timely scanlations of the highest quality we can muster for the forseeable future!)`;
    }

}