export default function (mapStateToProps) {
    const state = mapStateToProps()
    debugger
    return function (inner) {
        inner.prototype.mapStateToProps=mapStateToProps;
        debugger
        return inner;
    }
}