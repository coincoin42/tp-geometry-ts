import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";

export default class LogGeometryVisitor implements GeometryVisitor {
    constructor() {
        
    }

    visitPoint(p:Point): string{
        if (p.isEmpty()){
        console.log("Je suis un Point Vide")
        return "Je suis un Point Vide";
    }
    else {
        console.log("Je suis un point dont x="+p.x() +" et y="+p.y())
        return "Je suis un point dont x="+p.x() +" et y="+p.y();
    }
}

    visitLineString(l:LineString):string{
        if (l.isEmpty()){
            console.log("Je suis une Polyligne Vide")
            return "Je suis une Polyligne Vide"
        }
        else {
            console.log("Je suis une Polyligne de " + l.getNumPoints() + "points");
            return "Je suis une Polyligne de " + l.getNumPoints() + " points"
        }
    }



}