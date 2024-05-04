{
    //utility types
    //pick

    type person = {
        name: string;
        age: number;
        email?: string;
        contactNO: string
    }
    type NameAge = Pick<person, "name" | "age">

    //omit
    type contactInfo = Omit<person, "name" | "age">

    //required

    type personrequired = Required<person>

    //partial
    type personPartial = Partial<person>

    //readOnly
    type personReadonlr = Readonly<person>

    const person1: personReadonlr = {
        name: "mr",
        age: 200,
        contactNO: "017"
    }
    // person1.name = "my xj"

    //record type\
    //  type myObj={
    //     a:string,
    //     b:string
    //  }
     type myObj=Record<string,string>

     const obj1:myObj={
        a:"aa",
        b:'bb',
        c:'dd',
        // d:458,
     }
}