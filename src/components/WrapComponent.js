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

/*
* 代理拦截
* */
export function HOC(WrappedComponent) {
    return class Test extends Component {
        render() {
            const newProps = {
                title: 'New Header',
                footer: false,
                showFeatureX: false,
                showFeatureY: true
            }

            return <WrappedComponent {...this.props} {...newProps} />
        }
    }
}