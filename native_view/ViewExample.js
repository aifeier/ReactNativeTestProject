import {
    PropTypes
} from 'prop-types';
import {
    requireNativeComponent, View
} from 'react-native'
/*使用原生Android自定义View*/
var iface = {
    name: 'ViewExample',
    propTypes: {
        numberSize: PropTypes.number,
        ...View.propTypes // 包含默认的View的属性
    }
}

module.exports = requireNativeComponent('RNViewExample', iface)