{
    //generic constraint with keyof operator

    type Vehicle={
        bike:string;
        car:string;
        ship:string
    }

    type Owner ="bike"|"car"|"ship";

    type Owner2 = keyof Vehicle;

    const person1 : Owner2 ="bike";

const getPropertyValue=<x,y extends keyof x>(obj:x , key:y)=>{
return obj[key];
}

const user={
    name:"mr",
    age:26,
    address:'fgsjk'
}

const result1 = getPropertyValue(user,"name")

    // user['age']
}