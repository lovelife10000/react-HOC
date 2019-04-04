export default function (mapStateToProps) {
    const state = mapStateToProps()
    debugger
    return function (inner) {
        inner.prototype.getName=function () {
            console.log(666)
        };
        debugger
        inner.defaultProps=state;
        return inner;
    }
}