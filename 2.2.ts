{
    // interface
    type User1={
        name:string,
        age:number
    }

type UserWithRole1 = User1 & {role: string}

    const user1:UserWithRole1={
        name:"taz",
        age:21,
        role: "admin"
    }


interface User2{
    name:string,
    age:number
}

interface UserWithRole2 extends User2{
    role:string
}
const user2:UserWithRole2={
    name:"taz",
    age:21,
    role: "admin"
}

 
}