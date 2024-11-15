import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";
import GeometryCollection from "./GeometryCollection";

export default class LengthVisitor implements GeometryVisitor<number> {
    constructor() {
        
    }

    visitPoint(p:Point): number{
        if (p.isEmpty()){
        console.log("Je suis un Point Vide")
        return 0.0;
        
    }
    else {
        console.log("Je suis un point dont x="+p.x() +" et y="+p.y())
        return 0.0;
    }
}

    visitLineString(l:LineString):number{
        if (l.isEmpty()){
            console.log("Je suis une Polyligne Vide")
            return 0.0
        }
        else {
            console.log("Je suis une Polyligne de " + l.getNumPoints() + " points");
            const points = l.getPoints();
        let length = 0.0;

        for (let i = 1; i < points.length; i++) {
            const p1 = points[i - 1];
            const p2 = points[i];
            length += Math.sqrt(
                Math.pow(p2.x() - p1.x(), 2) + Math.pow(p2.y() - p1.y(), 2)
            );
        }

        return length;
        }
    }
    visitGeometryCollection(g: GeometryCollection): number {
        let s = 0.0;
        if (g.isEmpty()){
            console.log("Je suis une GeometryCollection vide")
            return 0.0;
        }
        else {
            console.log("Je suis une GeometryCollection de " + g.getNumGeometries() + " geometries" )
            for (const geometry of g.getGeometries()) {
                if (geometry instanceof LineString) {
                    s += this.visitLineString(geometry);
                } else if (geometry instanceof Point) {
                    console.log("Point détecté, aucune longueur ajoutée.");
                }
            }
        }
    }



}