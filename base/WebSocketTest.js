import React, {
    Component
} from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class WebSocketText extends Component {
    render() {
        // let wb = new WebSocket('192.168.0.61:8086');
        let wb = new WebSocket('ws://echo.websocket.org/');
        wb.onopen = () => {
            // 打开
            wb.send('something 就是你')
        }
        wb.onmessage = (e) => {
            console.log(e);
            console.log(e.data);
        }
        wb.onerror = (e) => {
            console.error(e.message);
        }
        wb.onclose = (e) => {
            console.log(e.code, e.reason);
        }
        return (
            <View><Text>哈哈哈哈哈</Text></View>
        )
    }
}