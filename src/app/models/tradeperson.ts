import { Category } from "./category.model";

export interface ITradePerson {
    id: number,
    type: string,
    title: string,
    email: string,
    phoneNumber: string,
    location: string,
    firstname : string,
    lastname : string,
    domain : string,
    speciality : string,
    adress : string,
    category : Category
}