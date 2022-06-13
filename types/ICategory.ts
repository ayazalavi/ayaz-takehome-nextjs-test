import { Nominee } from "./INominee";

export interface Category {
    id: string;
    title: string;
    items: Array<Nominee>;
}