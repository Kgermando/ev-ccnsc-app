import { Roles } from './enum';

export interface UserInformation {
	password: string;
	email: string;
	name?:string;
	metaData?:CustomerUserInformation;

}
export interface CustomerUserInformation {
	uid?:string;
    name?:string;
	email?: string;
	role?: Roles[];
	phoneNumber?: number;
	useraddress?:string;
	photoURL?:string;
	etatCivile?: string;
}

export interface Person{
	email?: string;
	name?:string;
	phoneNumber?: string;
	photoURL?:string;
	role?: Roles;
	uid?:string;
	useraddress?:string;
	etatCivile?: string;
}