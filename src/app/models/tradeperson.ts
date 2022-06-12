import { Category } from "./category.model";

export interface ITradePerson {
    id: number,
    type: string,
    title: string,
    email: string,
    phoneNumber: string,
    location: string,
    firstName : string,
    lastName : string,
    domain : string,
    speciality : string,
    address : string,
    description : string,
    category : Category
}