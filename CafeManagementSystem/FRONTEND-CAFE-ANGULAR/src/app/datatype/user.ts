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
    id:number,
    name:string
}

export interface Profile{
    id:number,
    name:string,
    contact:string,
    email:string
}

export interface Product{
    id:number,
    name:string,
    categoryId:number,
    categoryname:string,
    description:string,
    price:number,
    status:boolean
}