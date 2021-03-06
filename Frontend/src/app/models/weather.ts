export class Weather {
    clouds:{
        all:Number;
    };
    dt:Number;
    dt_txt:String;
    main:{
        feels_like:Number;
        grnd_level:Number;
        humidity:Number;
        pressure:Number;
        sea_level:Number;
        temp:Number;
        temp_kf:Number;
        temp_max:Number;
        temp_min:Number;
    };
    pop:0;
    sys:{
        pod:String;
    };
    visibility:Number;
    weather:[{
        id:Number;
        description:String;
        icon:String;
        main:String;
    }];
    wind:{
        deg:Number;
        speed:Number;
    }

}
