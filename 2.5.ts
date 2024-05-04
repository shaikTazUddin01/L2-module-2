{
    // function with generics
    const createArray = (params: string): string[] => {
        return [params];
    }
    const res1 = createArray("bangladesh");
    const createArrayWithG = <T>(params: T): T[] => {
        return [params]
    }
    type user = { id: number; name: string; }

    const res2 = createArrayWithG<user>({
        id: 222,
        name: "mr. x"
    })

    const addCourseToStdent = <T>(student: T) => {
        const course = 'next level web developer'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStdent({ name: 'x', email: "x@gmail.com", devType: 'nlwd' })

    console.log(student1);
}