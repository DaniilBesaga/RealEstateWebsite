import { ClassType } from "./ClassTypeEnum";
import { ParkingType } from "./ParkingTypeEnum";

export interface IResidentialComplex {
    id: number;
    complexName: string;
    imgsUrlFolder: string;
    classType: ClassType;
    developer: string;
    numberOfFloors: number;
    buildTechnology: string;
    houseCount: number;
    commisionedYear: number;
    ceillingHeight: number;
    parkingType: ParkingType;
    description: string;
}
