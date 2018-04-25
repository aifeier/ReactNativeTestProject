import React, {
    Component,
} from 'react';
import {
    AppRegistry,
    View,
    Text,
    TouchableOpacity
} from 'react-native'

// function setOpacityTo(value) {
//     this.refs[CHILD_REF].setNativeProps({
//         opacity: value
//     })
// }
// 直接操作 实现对原生组件点击实现透明度变化
export default class NativeProps extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <View>
                    <Text style={{textAlign:'center',alignSelf:'center'}} >Press me!</Text>
                </View>
            </TouchableOpacity>
        )
    }
}