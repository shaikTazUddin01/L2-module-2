"use strict";
{
    // function with generics
    const createArray = (params) => {
        return [params];
    };
    const res1 = createArray("bangladesh");
    const createArrayWithG = (params) => {
        return [params];
    };
    const res2 = createArrayWithG({
        id: 222,
        name: "mr. x"
    });
    const addCourseToStdent = (student) => {
        const course = 'next level web developer';
        return Object.assign(Object.assign({}, student), { course });
    };
    const student1 = addCourseToStdent({ name: 'x', email: "x@gmail.com", devType: 'nlwd' });
    console.log(student1);
}
