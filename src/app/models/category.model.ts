import { ServicesTradesPerson } from "./servicestradesperson.model";

export interface Category {
    idCategory: number;
    name: string;
    serviceTradesPersons: ServicesTradesPerson[]
}
