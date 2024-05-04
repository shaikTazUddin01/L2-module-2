{
    //conditional type

    type a1= number;
    type b1= string;

    type x= a1 extends null ? true : false;

    type y= a1 extends null ? true : b1 extends undefined ? undefined : any;

    type sheikh={
        bike:string;
        car:string;
        ship:string;
        plane: string;
    }
    //key if operator
     
    type checjVehicle<t> = t extends keyof sheikh ? true:false;

    type hasbike = checjVehicle <"car">
}