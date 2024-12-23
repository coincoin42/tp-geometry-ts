import Geometry from  "./Geometry";
import Point from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";


export default class Linestring extends AbstractGeometry{
    private points: Array<Point>;
  
    constructor(points: Array<Point> = []) {
      super();
      this.points = points ;
    }
  
    accept<T>(v:GeometryVisitor<T>):T{
      return v.visitLineString(this);
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
  