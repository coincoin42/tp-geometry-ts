import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";
import WktWriter from "../src/WktWriter.ts";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import WktVisitor from "../src/WktVisitor";
import GeometryCollection from "../src/GeometryCollection.ts";
import Linestring from "../src/LineString";
import LengthVisitor from "../src/LengthVisitor"

describe("test LengthVisitor", () => {
    it("test accept", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([7.0,8.0]);
        const pvide = new Point();
        
        
        const visitor = new LengthVisitor();
        
        const l = new LineString([p1,p2])
        const lvide = new LineString();

        const g = new GeometryCollection([p1,l]);
        const gvide = new GeometryCollection();

      /*  expect(gvide.accept(visitor)).to.deep.equal(0.0);
        expect(g.accept(visitor)).to.deep.equal(5.0);*/
        
        expect(lvide.accept(visitor)).to.deep.equal(0.0);
        expect(l.accept(visitor)).to.deep.equal(5.656854249492381);

        expect(pvide.accept(visitor)).to.deep.equal(0.0);
        expect(p1.accept(visitor)).to.deep.equal(0.0);
    });
     
    
});