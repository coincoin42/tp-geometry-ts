import Envelope from "./Envelope";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default interface GeometryVisitor<T> {

    visitPoint(p:Point):T;
    visitLineString(l:LineString):T;
    visitGeometryCollection(g:GeometryCollection):T;
}
    