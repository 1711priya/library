export interface RegisterUser{
    id:number;
    name:string;
    email:string;
    password:string;
    confpassword:string;
}

export interface User{
    id:number;
    name:string;
    email:string;
    password:string;
}

export interface Login{
    email:string;
    password:string;
}

export interface Book{
    id:number;
    bookName:string;
    bookAuthor:string;
    bookPrice:number;
    description:string;
}
