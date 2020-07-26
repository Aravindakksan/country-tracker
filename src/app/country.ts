export class country{
    name:String;
    region:String;
    subregion:String;
    area:String;
    population:String;
    capital:String;
    code:String;
    currency:String;
    flag:String;
    lat:String;
    lon:String;
    timezone:String;

    constructor(name,region,subregion,area,population,capital,code,currency,flag,lat,lon,timezone){
        this.area=area;
        this.capital=capital;
        this.code=code;
        this.currency=currency;
        this.flag=flag;
        this.lat=lat;
        this.lon=lon;
        this.name=name;
        this.population=population;
        this.region=region;
        this.subregion=subregion;
        this.timezone=timezone;
    }
}
