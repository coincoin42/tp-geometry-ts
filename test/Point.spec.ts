import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";


describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.isEmpty());
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(!p.isEmpty())
    });
    
    it("test translate(dx,dy)", () => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0,2.0);
        expect(p).to.deep.equal(new Point([4.0,6.0]));     
    });

    it("test clone", () => {
        const p = new Point([3.0,4.0]);
        const p2 = p.clone();
        p.translate(1.0,2.0);
        p2.translate(2.0,1.0);
        expect(p).to.deep.equal(new Point([4.0,6.0]));
        expect(p2).to.deep.equal(new Point([5.0,5.0]));     
    });

    it("test getType", () => {
        const p = new Point([3.0,4.0]);
        
        expect(p.getType()).to.deep.equal("Point");     
    });

    it("test getEnvelope", () => {
        const p = new Point([3.0,4.0]);
        
        expect(p.getEnvelope()).to.deep.equal(new Envelope([3.0,4.0],[3.0,4.0]));     
    });

});

