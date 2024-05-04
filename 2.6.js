"use strict";
{
    //contraints
    const addCourseToStdent = (student) => {
        const course = 'next level web developer';
        return Object.assign(Object.assign({}, student), { course });
    };
    // const student3 = addCourseToStdent({amni:"amin" })
    const student1 = addCourseToStdent({ id: 222, name: 'x', email: "x@gmail.com", devType: 'nlwd' });
    const student2 = addCourseToStdent({ id: 254, name: 'x', email: "x@gmail.com", watch: 'nlwd' });
}
