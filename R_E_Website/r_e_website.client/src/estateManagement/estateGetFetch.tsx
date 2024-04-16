import { EstateDTO } from "./IEstateDTO";

export function displayEstates(estateType: string) {
    return new Promise<EstateDTO[]>((resolve, reject) => {
        setTimeout(async () => {
            try {
                const response = await fetch('/api/estatedto', {
                    headers: new Headers({
                        'estateType': `${estateType}`,
                        'sort': 'any'
                    })
                });
                const data = await response.json();
                resolve(data);
            } catch (error) {
                reject(error);
            }
        }, 1000); 
    });
}
