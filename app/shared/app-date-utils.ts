
/**
 * Transform dates from strings
 * Use fr_FR local
 */
export class DateUtils {
    
    /**
     * to use with datetime-picker
     * example: 10 mai 21:00
     */
    static toFormatDM_Hm(dateStr: string): string {
        return moment(dateStr).locale("fr_FR").format("DD MMM  HH:mm");
    }
    
     /**
     * to use with datetime-picker
     * example 11 Mars 14:50
     */
    static toShortFormat(dateStr: string): string {
        let dateObject = new Date(dateStr);
        let dateResult = "-";
        dateResult = dateObject.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: 'short'
        }).split(' ').join(' ') + " " + this.twoDigits(dateObject.getHours()) + ":" + this.twoDigits(dateObject.getMinutes());
        
        return this.capitalize(dateResult);
    }
    
    /**
     * format example : 	Mar. 08 mars 2016 14:18
     * @see capitalize
     */
    static toFormatDayNMonthY_Hi(dateStr: string): string {
        let dateObject = new Date(dateStr);
        let dateResult = "-";
        dateResult = dateObject.toLocaleDateString('fr-FR', {
            weekday:'short',
            day:   '2-digit',
            month: 'short',
            year:  'numeric',
        }).split(' ').join(' ') + " " + this.twoDigits( dateObject.getHours()) + ":" + this.twoDigits(dateObject.getMinutes());
        
        return this.capitalize(dateResult);
    }
    
    /**
     * Mettre au majiscule chaque premiere lettre dans la chaine 
     */
    static capitalize(str:string):string {
        return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
    
    static twoDigits(n:number):string{
        if(n>=0 && n<=9)
          return "0"+n;
        return n+"";
    }

}