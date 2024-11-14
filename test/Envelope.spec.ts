import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder et Envelope", () => {
    it("test and insert builder", () => {
        let eb = new EnvelopeBuilder();
        let e = eb.build(); 
        expect(e.isEmpty());

        eb.insert([1.0,2.0])
        let e2 = eb.build();

        expect(e2).to.deep.equal(new Envelope([1.0,2.0],[1.0,2.0]));

        eb.insert([1.0,3.0])
        
        let e3 = eb.build();
        expect(e3).to.deep.equal(new Envelope([1.0,2.0],[1.0,3.0]));

        eb.insert([0.0,2.5])
        
        let e4 = eb.build();
        expect(e4).to.deep.equal(new Envelope([0.0,2.0],[1.0,3.0]));

        eb.insert([4.0,0.5])
        
        let e5 = eb.build();
        expect(e5).to.deep.equal(new Envelope([0.0,0.5],[4.0,3.0]));
    });


    it("test getters", () => {
        let eb = new EnvelopeBuilder();
        let e_vide = eb.build();

        expect(e_vide.isEmpty);
        expect(Number.isNaN(e_vide.getXmax()));
        expect(Number.isNaN(e_vide.getYmax()));
        expect(Number.isNaN(e_vide.getXmin()));
        expect(Number.isNaN(e_vide.getYmin()));

        
        eb.insert([1.0,2.0])
        eb.insert([0.5,3.0])
        let e = eb.build(); 

        expect(!e.isEmpty)
        expect(e.getXmax()).to.deep.equal(1.0);
        expect(e.getYmax()).to.deep.equal(3.0);
        expect(e.getXmin()).to.deep.equal(0.5);
        expect(e.getYmin()).to.deep.equal(2.0);
        
        
    });

    it("test constructeur envelope", () => {
        let e_vide = new Envelope();
        expect(e_vide.isEmpty());
        expect(e_vide.toString()).to.deep.equal("Enveloppe {A(NaN ,NaN);B(NaN ,NaN);C(NaN ,NaN);D(NaN ,NaN)}");
        
        let e = new Envelope([0.5,2],[1,3]);

        expect(!e.isEmpty)
        expect(e.getXmax()).to.deep.equal(1.0);
        expect(e.getYmax()).to.deep.equal(3.0);
        expect(e.getXmin()).to.deep.equal(0.5);
        expect(e.getYmin()).to.deep.equal(2.0);
        expect(e.toString()).to.deep.equal("Enveloppe {A(0.5 ,2);B(1 ,2);C(1 ,3);D(1 ,3)}");
    });
    });

    


