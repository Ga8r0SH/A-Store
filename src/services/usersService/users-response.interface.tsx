export interface usersInterface<Users> {
    limit: number
    users: Users
    skip: number
    total: number
}

export interface Users {
    id: number,
    firstName: string,
    lastName: string,
    age: number,
    image: string,
    email: string,
    phone: string,
    birthDate: string,
    maidenName: string,
    username:string
    company: {
        title: string,
        address: {
            city: string,
            address: string
        }
    }
}
