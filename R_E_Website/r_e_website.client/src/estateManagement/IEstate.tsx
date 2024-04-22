import { EstateType } from "./EnumEstateType";

export interface IEstate {
    id: number;
    estateType: EstateType;
    imgsUrlFolder?: string;
    city?: string;
    complexName?: string;
    complexUrl?: string;
    district?: string;
    estateAddress?: string;
    totalSquare?: number;
    livingSquare?: number;
    kitchenSquare?: number;
    roomCount?: number;
    numberOfFloors?: number;
    estateFloor?: number;
    priceUah: number;
    priceUsd: number;
    houseSeria?: string;
    houseArea?: number;
    houseMaterial?: string;
    discription?: string;
    iFrameUrl?: string;
    phoneNumber: string;
}