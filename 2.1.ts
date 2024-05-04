{
    //type assertion
    let anything: any;

    anything = "web development";
    anything = 12;

    (anything as number)


    const kgToGm=(value : string |number) : string | number | undefined =>{
        if (typeof(value)==='string') {
            const convertedValue=parseFloat(value)*3;
            return convertedValue;
        }
        if (typeof(value)==='number') {
            return value*1000;
        }
    }
    const result1=kgToGm(1000) as number;
    const result2=kgToGm("1000") as number;


type CustomErrr={
    message: string;
}
    try {
    } catch (error) {
        console.log((error as CustomErrr).message);
    }
}