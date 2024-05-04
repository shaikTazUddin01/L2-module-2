{
    //contraints
    const addCourseToStdent = <T extends{id:number;name:string,email:string}>(student: T) => {
        const course = 'next level web developer'

        return {
            ...student,
            course
        }
    }

    // const student3 = addCourseToStdent({amni:"amin" })
    const student1 = addCourseToStdent({id:222, name: 'x', email: "x@gmail.com", devType: 'nlwd' })
    const student2 = addCourseToStdent({id:254, name: 'x', email: "x@gmail.com", watch: 'nlwd' })
}