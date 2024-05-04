"use strict";
{
    //type assertion
    let anything;
    anything = "web development";
    anything = 12;
    anything;
    const kgToGm = (value) => {
        if (typeof (value) === 'string') {
            const convertedValue = parseFloat(value) * 3;
            return convertedValue;
        }
        if (typeof (value) === 'number') {
            return value * 1000;
        }
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
