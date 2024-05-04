{
    // interface -geneic
    interface Developer<T>{
        name:string,
        computer:{
            brand:string,
            model:string,
            releaseYear:number
        }
        smartWatch:T
    }

    const poorDeveloper:Developer<{brand:string,model:string}>={
        name:"taz",
        computer:{
            brand:"hp",
            model:'X-25ur',
            releaseYear:2018
        },
        smartWatch:{
            brand:'apple',
            model:'something'
        }
    }
}