{
    //mapped types
    type AreaNumber = {
        height: number;
        width: number;
    }
    type Height = AreaNumber['height'] //look up type

    type AreaString <T>= {
        [key in keyof T]: T[key]
    }
    const rea1:AreaString<{height:string;width:number}>={
        height:"100",
        width:20
    }
}