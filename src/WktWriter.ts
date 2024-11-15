
import Geometry from  "./Geometry";


export default class WktWriter {
    
    
    constructor() {
        
      }

    write(g: Geometry): string {
        let s = g.getType();
        if (g.isEmpty()){
            console.log(s+" Empty");
            return s+" Empty"
        }
        let env = g.getEnvelope();
        if (s ==="Point"){
            console.log(s+ "(" + env.getXmin()+ " ," +env.getYmin()+ ")");
            return s+ "(" + env.getXmin()+ " ," +env.getYmin()+ ")";
        }

        if (s ==="LineString"){
            console.log(s+env);
            return s+ "(" + env.getXmin()+ "," +env.getYmin()+ " "+env.getXmax()+","+env.getYmax()+")"
    
                }
        
}
}