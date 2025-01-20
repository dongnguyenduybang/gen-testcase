import { UserRole } from "./enums/user-role.enum";

export const createUserDTO = {
    username: 'duy',
    firstname: 'dong',
    lastname: 'bang',
    address: 'ninh kieu, can tho',
    birthday: new Date().toISOString(),
    age: 22,
    role: UserRole.USER,
    isActive: true
};

// export class createUserDTO {

//     username: string
//     firstname: string
//     lastname: string
//     address: string
//     birthday: Date
//     age: number
//     isActive: boolean
// }