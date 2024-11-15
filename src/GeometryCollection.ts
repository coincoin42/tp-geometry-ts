import Coordinate from "./Coordinate";
import Geometry from  "./Geometry";
import Envelope from "./Envelope";
import Point from "./Point"
import LineString from "./LineString"
import EnvelopeBuilder from "./EnvelopeBuilder";
import GeometryVisitor from "./GeometryVisitor";
import WktWriter from "./WktWriter";
import WktVisitor from "./WktVisitor";
import AbstractGeometry from "./AbstractGeometry";

export default class GeometryCollection extends AbstractGeometry {
    private geometries: Array<Geometry>;

    constructor(geometries: Array<Geometry>  = []) {
        super();
        this.geometries = geometries;
      }

    getGeometries(){
        return this.geometries
    }

    isEmpty(){
        return this.geometries.length === 0;
    }

    clone(): Geometry {
        let g = new GeometryCollection();
        function ajout(geom: Geometry){
            let g2 = geom.clone();
            g.geometries.push(g2);
        }
        this.geometries.forEach(ajout);
        return g
    }

    translate(dx: number, dy: number): void {
        
        function translater(geom: Geometry) {
            let gcopy = geom.clone();
            geom.translate(dx,dy);
             
          }

        if (!this.isEmpty()){
        this.geometries.forEach(translater)
        } 
    }

    accept(v: GeometryVisitor): void {
        v.visitGeometryCollection(this);
    }

    getNumGeometries(){
        return this.geometries.length
    }

    getGeometryN(n:number){
        if (n>this.getNumGeometries() || n<0 ||this.isEmpty()){
            return new Point();
        }
        return this.geometries[n]
    }
    
    getType(): string {
        return "GeometryCollection"
    }


}