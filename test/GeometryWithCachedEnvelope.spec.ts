import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import WktWriter from "../src/WktWriter.ts";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import WktVisitor from "../src/WktVisitor";
import GeometrywithCachedEnvelope from "../src/GeometryWithCachedEnvelope"

describe("test GeometryWithCachedEnvelope", () => {
    
        it("test default constructor", () => {
            
            let pvide = new Point();
            let p = new Point([1.0,2.0]);
            let gvide = new GeometrywithCachedEnvelope(pvide);
            let g = new GeometrywithCachedEnvelope(p);

            expect(gvide.isEmpty());  
            expect(!g.isEmpty());

            expect(g.getType()).to.deep.equal("Point");
            expect(g.getOriginal()).to.deep.equal(p);
            expect(g.getCache()).to.deep.equal(new Envelope());
            
            let v = new WktVisitor();

            expect(g.accept(v)).to.deep.equal(undefined);
            expect(g.clone()).to.deep.equal(g.getOriginal())
            
            expect(g.getEnvelope()).to.deep.equal(g.getOriginal().getEnvelope());
            expect(g.getCache()).to.deep.equal(g.getOriginal().getEnvelope());

            g.translate(2,2);
            expect(g.getOriginal()).to.deep.equal(new Point([3.0,4.0]));
            expect(g.getCache()).to.deep.equal(new Envelope());
        
    });
});
