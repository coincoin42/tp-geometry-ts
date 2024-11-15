import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";

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
getBuffer(): string{
    return this.buffer;
}
}