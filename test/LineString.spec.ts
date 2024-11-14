import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test LineString", () => {
    
        it("test default constructor", () => {
            const l = new LineString();  
            expect(l.getPoints()).to.deep.equal([]);  
            expect(l.getNumPoints()).to.equal(0);
            expect(l.isEmpty()).to.equal(true);  
        
    });

    it("test constructor with coordinates", () => {
        
            const p1 = new Point([3.0, 4.0]);  
            const p2 = new Point([2.0, 7.0]);  
            const l = new LineString([p1, p2]);
            const l_vide = new LineString([new Point()])
            const l_1 = new LineString([p1])
            
            expect(l.getPoints().map(p => p.getCoordinate())).to.deep.equal([[3.0, 4.0], [2.0, 7.0]]);
            expect(l.getPointN(1)).to.equal(p2);  
            expect(l.getNumPoints()).to.equal(2);  
        
        
    });
    it("test getType()", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        expect(l.getType()).to.deep.equal("LineString");     
    });

    it("test getter et longueur", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        expect(l.getPoints()).to.deep.equal([p1,p2]);
        expect(l.getNumPoints()).to.deep.equal(2);
       
    });

    it("test getPointN", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        const l_vide = new LineString();
        expect(l.getPointN(0)).to.deep.equal(p1);
        expect(l_vide.getPointN(0)).to.deep.equal(new Point());
        expect(l.getPointN(-1)).to.deep.equal(new Point());
        expect(l.getPointN(3)).to.deep.equal(new Point());
        
    });
    it("test isEmpty()", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        expect(l.isEmpty()).to.deep.equal(false);     
    });

    it("test translate(dx,dy)", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        
        l.translate(1,3)
        expect(l).to.deep.equal(new LineString([new Point([4.0,7.0]),new Point([3.0,10.0])]));     
    });

    it("test clone", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        const l_copy = l.clone();
        
        l.translate(1,3)
        l_copy.translate(-1,4)
        expect(l).to.deep.equal(new LineString([new Point([4.0,7.0]),new Point([3.0,10.0])]));
        expect(l_copy).to.deep.equal(new LineString([new Point([2.0,8.0]),new Point([1.0,11.0])]));     
    });

    it("test getEnvelope", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        
        expect(l.getEnvelope()).to.deep.equal(new Envelope([2.0,4.0],[3.0,7.0]));     
    });
});