import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";
import GeometryCollection from "./GeometryCollection";

export default class LogGeometryVisitor implements GeometryVisitor {
    constructor() {
        
    }

    visitPoint(p:Point): void{
        if (p.isEmpty()){
        console.log("Je suis un Point Vide")
        
    }
    else {
        console.log("Je suis un point dont x="+p.x() +" et y="+p.y())
        
    }
}

    visitLineString(l:LineString):void{
        if (l.isEmpty()){
            console.log("Je suis une Polyligne Vide")
            
        }
        else {
            console.log("Je suis une Polyligne de " + l.getNumPoints() + " points");
            
        }
    }
    visitGeometryCollection(g: GeometryCollection): void {
        if (g.isEmpty()){
            console.log("Je suis une GeometryCollection vide")
        }
        else {
            console.log("Je suis une GeometryCollection de " + g.getNumGeometries() + " geometries" )
            
        }
    }



}