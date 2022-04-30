export interface IAddress {
    city: string;
    street: string;
    zipcode: number | string;
}

export interface ICompany {
    name: string;
}

export interface IUsers {
    id: number;
    name: string;
    address: IAddress
    company: ICompany
}

export interface IUserProfile {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress
    phone: string | number;
    website: string;
}