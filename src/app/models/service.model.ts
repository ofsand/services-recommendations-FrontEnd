import { Category } from "./category.model"

export interface IService {
    id: number,
    title: string,
    email: string,
    phoneNumber: string,
    location: string,
    category : Category

}