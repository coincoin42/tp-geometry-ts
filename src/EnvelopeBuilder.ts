import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import Linestring from "./LineString";
import Point from "./Point";

export default class EnvelopeBuilder implements GeometryVisitor  {
    private Xmin:number;
    private Xmax:number;
    private Ymin:number;
    private Ymax:number;

    constructor(Xmin = Number.NaN, Ymin = Number.NaN, Xmax = Number.NaN, Ymax = Number.NaN) {
        this.Xmin = Xmin;
        this.Ymin = Ymin;
        this.Xmax = Xmax;
        this.Ymax = Ymax; 
      }

visitPoint(p: Point): void {
    
    if(!p.isEmpty()){
        this.insert(p.getCoordinate())      
    }
    
}

visitLineString(l: Linestring): void {
    const inserer = (point: Point, builder: EnvelopeBuilder) => {
        builder.insert(point.getCoordinate());
    };
    
    if (!l.isEmpty()) {
        
        l.getPoints().forEach(point => inserer(point, this)); 
    }
}

build(): Envelope {
    
    if (Number.isNaN(this.Ymin)||Number.isNaN(this.Xmin)){
        return new Envelope()
    }

    let bottomleft = [this.Xmin,this.Ymin];
    let topright = [this.Xmax,this.Ymax];

    return new Envelope(bottomleft,topright);
}

insert (coordinate: Coordinate){
    let X = coordinate[0];
    let Y = coordinate[1];
    
    if (Number.isNaN(this.Xmin)){
        this.Xmin = X;
        this.Xmax = X;
    }

    if (Number.isNaN(this.Ymin)){
        this.Ymin = Y;
        this.Ymax = Y;
    }

    if (Y < this.Ymin){
        this.Ymin = Y;
    }

    if (Y > this.Ymax){
        this.Ymax = Y;
    }

    if (X < this.Xmin){
        this.Xmin = X;
    }

    if (X > this.Xmax){
        this.Xmax = X;
    }
    
}
}