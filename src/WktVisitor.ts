import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";
import GeometryCollection from "./GeometryCollection";
import Geometry from "./Geometry";

export default class WktVisitor implements GeometryVisitor {
    private buffer:string;
    
    constructor() {
        this.buffer = "empty";
    }
    visitPoint(p: Point): void {
        
    
    if (p.isEmpty()){
        console.log("Point Empty");
        this.buffer = "Point Empty";
    }
    
    else {
        let env = p.getEnvelope();
        this.buffer = "Point(" + env.getXmin()+ " ," +env.getYmin()+ ")";
        console.log("Point(" + env.getXmin()+ " ," +env.getYmin()+ ")");
        
    }

}
visitLineString(l: LineString): void {
    

if (l.isEmpty()){
    console.log("LineString Empty");
    this.buffer = "LineString Empty";
    
}

else{
    let env = l.getEnvelope();
    this.buffer = "LineString(" + env.getXmin()+ "," +env.getYmin()+ " "+env.getXmax()+","+env.getYmax()+")";
    console.log("LineString(" + env.getXmin()+ "," +env.getYmin()+ " "+env.getXmax()+","+env.getYmax()+")");

        }
}


visitGeometryCollection(g: GeometryCollection): void {
    let s = "GeometryCollection("
    function ajout(geom: Geometry){
        let W = new WktVisitor();
        geom.accept(W);
        let wkt = W.getBuffer();
        s = s + wkt;
        if (geom != g.getGeometryN(g.getNumGeometries()-1)){
            s += " ,";
        }
    }
    if (g.isEmpty()){
        this.buffer =  "GeometryCollection Empty"
    }
    
    
    else{
    
    g.getGeometries().forEach(ajout);
    s = s + ")"
    this.buffer = s;
    }
    
}
getBuffer(): string{
    return this.buffer;
}


}