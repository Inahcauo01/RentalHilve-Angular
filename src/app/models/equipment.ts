export interface Equipment {
    id?: number;
    name?: string;
    quantity?: number;
    equipmentFamilyId?: number;
}

export class CEquipment implements Equipment {
    constructor(
        public id?: number,
        public name?: string,
        public quantity?: number,
        public equipmentFamilyId?: number,
    ){}
}
