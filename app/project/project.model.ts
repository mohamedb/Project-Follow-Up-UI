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
        this.Benifite = `Wouldn't say this and too far out of subject, the most usual context would be "I'm gonna kill you" "I'll kill you." But again, it's so context based, it's not going to be translated as that in every situation. 
                        It's a pretty heated thing to say and sometimes they'll inflect even more "passion" into it with that little bu- prefix which kind of adds strength into the following verb. (like the internet favorite,  
                        emphasis leaves you with something for another discussion entirely.)`;
        this.Objective = `I had a lot more to say and a lot more examples, but this went on way longer than I expected already. Perhaps I'll revisit this topic at a future date, as I know it's one that's constantly being addressed.
                            Until then, from me and the crew here at mangastream, thanks as always for your readership and we hope to continue to bring you timely scanlations of the highest quality we can muster for the forseeable future!)`;
    }

}