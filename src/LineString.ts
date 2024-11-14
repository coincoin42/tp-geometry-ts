import Geometry from  "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

export default class Linestring implements Geometry {
    private points: Array<Point>;
  
    constructor(points: Array<Point> = []) {
      this.points = points ;
    }
  


    getEnvelope(): Envelope {
        let eb = new EnvelopeBuilder();
        
        function inserer(point: Point){
            eb.insert(point.getCoordinate())
        }
        
        this.points.forEach(inserer);
        return eb.build()
    }
    getType(): string {
      return "LineString";
    }
  
    getPoints(): Array<Point> {
      return this.points;
    }
  
    getNumPoints(): number {
      return this.points.length;
    }

    
    getPointN(n : number): Point {
        if (n>this.getNumPoints() || n<0 ||this.isEmpty()){
            return new Point();
        }
      return this.points[n];
    }

    clone(): Geometry{
        let l = new Linestring();
        function ajout(point: Point){
            let p2 = new Point([point.x(),point.y()])
            l.points.push(p2)
        }
        this.points.forEach(ajout);
        return l
    }

    isEmpty(): boolean {
        
        return this.points.length === 0 
    }
  
    translate(dx :number, dy:number): void {
        function translater(point: Point) {
            point.translate(dx,dy);
          }

        if (!this.isEmpty()){
        this.points.forEach(translater)
        }
    }
  }
  