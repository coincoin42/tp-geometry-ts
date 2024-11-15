import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryVisitor from "./GeometryVisitor";

export default class WktVisitor implements GeometryVisitor {
    private buffer:string;
    
    constructor() {
        this.buffer = "empty"
    }
    visitPoint(p: Point): string {
        
    
    if (p.isEmpty()){
        console.log("Point Empty");
        return "Point Empty"
    }
    
    else {
        let env = p.getEnvelope();
        this.buffer = env.toString();
        console.log("Point(" + env.getXmin()+ " ," +env.getYmin()+ ")");
        return "Point(" + env.getXmin()+ " ," +env.getYmin()+ ")";
    }

}
visitLineString(l: LineString): string {
    

if (l.isEmpty()){
    console.log("LineString Empty");
    return "LineString Empty"
}

else{
    let env = l.getEnvelope();
    this.buffer = env.toString();
    console.log("LineString(" + env.getXmin()+ "," +env.getYmin()+ " "+env.getXmax()+","+env.getYmax()+")");
    return "LineString(" + env.getXmin()+ "," +env.getYmin()+ " "+env.getXmax()+","+env.getYmax()+")"

        }
}
}