interface pet{
    name:string;
    legsCount:number;
    tail:boolean;
    colour:string;
};
var petCat:pet={
    name:"Cat",
    legsCount:4,
    tail:true,
    colour:"black",
};
var petDog:pet={
    name:"Dog",
    legsCount:4,
    tail:false,
    colour:"white",
};
function petFactory(name:string,legsCount:number,tail:boolean,colour:string):pet{
    return{
        name:name,
        legsCount:legsCount,
        tail:tail,
        colour:colour,
    }
}
const catPet=petFactory("Cat",4,true,"black");
const dogPet=petFactory("Dog",4,false,"white");
console.log(petCat,petDog)


interface plane{
    name:string;
    height:number;
    isFly:boolean;
};
let airPlane:plane={
    name:"fliJinnah",
    height:10,
    isFly:true,
};
let aeroPlane:plane={
    name:"saudiAirLine",
    height:5,
    isFly:false,
};
function planePort(name:string,height:number,isFly:boolean):plane{
    return{
        name:name,
        height:height,
        isFly:isFly,
    }
}
const flyPlane=planePort("flyJinnah",10,true);
const landPlane=planePort("sudiAirLine",5,false);
console.log(airPlane,aeroPlane)