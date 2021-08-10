export interface IAddress {
	street: string
	city: string
	zipcode: string
}

export interface IUser {
	id: number
	email: string
	name: string
	address: IAddress
}
