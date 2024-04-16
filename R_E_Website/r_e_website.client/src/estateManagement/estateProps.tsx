import { EstateDTO } from "./IEstateDTO";

export type EstateProps = {
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    filters: EstateDTO[];
    whiteBackground: boolean;
}