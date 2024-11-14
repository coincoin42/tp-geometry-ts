import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder  {
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