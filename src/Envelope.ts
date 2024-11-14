import Coordinate from "./Coordinate";


export default class Envelope  {
    private bottomleft: Coordinate;
    private topright: Coordinate;

    constructor(bottomleft: Coordinate = [], topright: Coordinate  = []) {
        this.bottomleft = bottomleft ;
        this.topright = topright;
      }
    
    isEmpty(): boolean {
    
        return this.bottomleft.length === 0 && this.topright.length === 0;
          
    }

    getXmin(): number {
        if (this.isEmpty()){
            return Number.NaN
        }
        return this.bottomleft[0]
    }

    getXmax(): number {
        if (this.isEmpty()){
            return Number.NaN
        }
        return this.topright[0]
    }

    getYmin(): number {
        if (this.isEmpty()){
            return Number.NaN
        }
        return this.bottomleft[1]
    }

    getYmax(): number {
        if (this.isEmpty()){
            return Number.NaN
        }
        return this.topright[1]
    }

    toString(): string {
        return "Enveloppe {A("+this.getXmin()+" ," + this.getYmin()+");" + "B("+this.getXmax()+" ," + this.getYmin()+");" + "C("+this.getXmax()+" ," + this.getYmax()+");" + "D("+this.getXmax()+" ," + this.getYmax()+")}"
    }

}