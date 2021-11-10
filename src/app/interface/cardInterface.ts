import { Guid } from "guid-typescript";

export interface Card {
    id: Guid;
    categories: string;
    title: string;
    price: number;
}