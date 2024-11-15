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


describe("test GeometryCollection", () => {
    
        it("test default constructor", () => {
            const g = new GeometryCollection();  
            expect(g.getGeometries()).to.deep.equal([]);  
            expect(g.getNumGeometries()).to.equal(0);
            expect(g.isEmpty()).to.equal(true);  
        
    });

    it("test accept", () => {
        const p = new Point([3.0,4.0]);
        const pvide = new Point();
        
        const visitor = new LogGeometryVisitor();
        const Wktvisitor = new WktVisitor();
        
        const l = new LineString([p,pvide,p])
        const lvide = new LineString();

        const g = new GeometryCollection([p,l]);
        const gvide = new GeometryCollection();

        expect(gvide.accept(visitor)).to.deep.equal(undefined);
        expect(g.accept(visitor)).to.deep.equal(undefined);
        
        expect(gvide.accept(Wktvisitor)).to.deep.equal(undefined);
        expect(g.accept(Wktvisitor)).to.deep.equal(undefined);
    });

    it("test asText", () => {
        const p = new Point([3.0,4.0]);
        const lvide = new LineString();
        const l = new LineString([p,p]);
        
        const gvide = new GeometryCollection();
        const g = new GeometryCollection([p,lvide,l])
        
        
        expect(gvide.asText()).to.deep.equal("GeometryCollection Empty");
        expect(g.asText()).to.deep.equal("GeometryCollection(Point(3 ,4) ,LineString Empty ,LineString(3,4 3,4))");     
    });
    it("test constructor with coordinates", () => {
        
            const p1 = new Point([3.0, 4.0]);  
            const p2 = new Point([2.0, 7.0]);  
            const l = new LineString([p1, p2]);
            const l_vide = new LineString([new Point()])
            const l_1 = new LineString([p1])

            const g = new GeometryCollection([p1,l])
            
            
            expect(g.getGeometryN(1)).to.deep.equal(l);  
            expect(g.getNumGeometries()).to.deep.equal(2);  
        
        
    });
    it("test getType()", () => {
        const g = new GeometryCollection();
        expect(g.getType()).to.deep.equal("GeometryCollection");     
    });

    it("test getter et longueur", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const g = new GeometryCollection([p1,p2]);
        expect(g.getGeometries()).to.deep.equal([p1,p2]);
        expect(g.getNumGeometries()).to.deep.equal(2);
       
    });

    it("test getPointN", () => {
        const p = new Point([3.0,4.0]);
        const l = new LineString([new Point([2.0,7.0]),p]);
        const g = new GeometryCollection([p,l]);
        const g_vide = new GeometryCollection();
        expect(g.getGeometryN(0)).to.deep.equal(p);
        expect(g_vide.getGeometryN(0)).to.deep.equal(new Point());
        expect(g.getGeometryN(-1)).to.deep.equal(new Point());
        expect(g.getGeometryN(3)).to.deep.equal(new Point());
        
    });
    it("test isEmpty()", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        const g = new GeometryCollection([l,p2]);
        expect(g.isEmpty()).to.deep.equal(false);     
    });

    it("test translate(dx,dy)", () => {
        const p = new Point([3.0, 4.0]);
        const p2 = new Point([3.0, 4.0]);
        const l = new LineString([p]);
        const g = new GeometryCollection([p2, l]);
    
        // Appliquer la translation
        g.translate(1, 3);
    
        
        const expected = new GeometryCollection([
            new Point([4.0, 7.0]),         
            new LineString([new Point([4.0, 7.0])])  
        ]);
    
        
        expect(g).to.deep.equal(expected);     
    });
    

    it("test clone", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const p3 = new Point([3.0,4.0]);

        const l = new LineString([p3,p2]);
        const g = new GeometryCollection([l,p1]);
        const g_copy = g.clone();
        
        g.translate(1,3)
        g_copy.translate(-1,4)
        expect(g).to.deep.equal(new GeometryCollection([new LineString([new Point([4.0,7.0]),new Point([3.0,10.0])]),new Point([4.0,7.0])]));
        expect(g_copy).to.deep.equal(new GeometryCollection([new LineString([new Point([2.0,8.0]),new Point([1.0,11.0])]),new Point([2.0,8.0])]));     
    });

    
    it("test getEnvelope", () => {
        const p = new Point([3.0,4.0]);
        const l = new Linestring([new Point([2.0,7.0])]);
        const g = new GeometryCollection([p,l]);
        
        
        expect(g.getEnvelope()).to.deep.equal(new Envelope([2.0,4.0],[3.0,7.0]));     
    });
});