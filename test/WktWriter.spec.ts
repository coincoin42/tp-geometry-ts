import "mocha";

import { expect } from "chai";
import Geometry from  "../src/Geometry";
import WktWriter from "../src/WktWriter.ts";
import LineString from "../src/LineString";
import Point from "../src/Point";



describe("test WktWriter", () => {
    it("test write", () => {
        
        let pvide = new Point();
        let lvide = new LineString();

        let w = new WktWriter();
        
        expect(w.write(pvide)).to.deep.equal("Point Empty");
        expect(w.write(lvide)).to.deep.equal("LineString Empty");

        let p = new Point([0.5,0]);
        let p2 = new Point([1,1]);
        let l = new LineString([p,p2])

        expect(w.write(p)).to.deep.equal("Point(0.5 ,0)");
        expect(w.write(l)).to.deep.equal("LineString(0.5,0 1,1)");
    });
});