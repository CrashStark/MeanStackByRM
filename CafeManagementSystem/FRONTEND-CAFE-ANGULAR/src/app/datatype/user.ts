export interface User{
    name:string,
    contact:number,
    email:string,
    password:string
}

export interface LoginUser{
    email:string,
    password:string
}

export interface Categorty{
    name:string;
}

export interface Profile{
    id:number,
    name:string,
    contact:string,
    email:string
}