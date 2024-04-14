import { EstateType } from "./EnumEstateType";

export interface IEstateFilter {
    estateType: EstateType,
    estateLocation: string,
    roomsCountFrom?: number,
    roomsCountTo?: number,
    totalSquareFrom: number,
    totalSquareTo: number,
    priceRangeFrom: number,
    priceRangeTo: number
}