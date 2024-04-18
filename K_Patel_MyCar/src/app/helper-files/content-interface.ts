export interface Content{
    id?: number | null;
    title: string;
    description: string;
    manufacturer: string;
    imgURL: string;
    type: string;
    tags: string[];  
}