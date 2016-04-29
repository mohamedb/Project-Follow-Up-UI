/**
 *  Miror: Of ModelStateWrapper
 * @see /Models folder
 *  int State: if valid State=1 else =0
 *  List<SimpleKeyValue<string, string>> SuccessMessages
 *  string Message: General message
 *  List<SimpleKeyValue<string, string>> ErrorMessages
 */
export class ModelState {
    /**
     * Flag if ==1 model is valid else not valid
     */
    State:number;
    SuccessMessages:Array<any>=[];
    ErrorMessages:Array<any>=[];
    Message:string="";
    
}