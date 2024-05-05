import { EstateDTO } from "./IEstateDTO";

export type EstateProps = {
    filters: EstateDTO[],
    searchById: string,
    display: string,
    sort: string
}