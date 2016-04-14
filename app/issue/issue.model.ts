/**
 * Miror of: ViewModel/Issue/AddIssueViewModel.cs
 * [Required]
 * int Id 
 * [Required]
 * int ProjectId  
 * [Required]
 * [StringLength(100, ErrorMessage = "The {0} must be between {1} and {2} caracters.", MinimumLength = 15)]
 * string Description  
 * [Required]
 * string Status 
 * List<SimpleKeyValue<string,string>> StatusList  
 * bool Deleted 
 * DateTime CreateAt
 * string RelatedArea 
 */

export class IssueModel {
    Id: number = 0;
    ProjectId: number;
    Description: string;
    Status: any;
    StatusList: any = [];
    Deleted: boolean;
    RelatedArea: string;


    constructor() { }
}