/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {Button, Platform, ScrollView, StyleSheet} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import ToastExample from './native_modules/ToastExample'
import CallBackExample from './native_modules/CallBackExample'
import ImagePickerModule from './native_modules/ImagePickerModule';
import ViewExample from './native_view/ViewExample'
import ARTTest from "./base/ARTTest";
import ChartExample from "./chart/ChartExample";

type Props = {};
export default class App extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log('android' === Platform.OS)
        ToastExample.show('测试Toast', ToastExample.SHORT);
        CallBackExample.measureLayout(
            100,
            200,
            (error) => {
                console.error('CallBackExample error: ' + error)
            },
            (x, y, width, height) => {
                ToastExample.show('CallBackExample result: ' + x + ':' + y + ':' + width + ':' + height, ToastExample.LONG);
                // alert('CallBackExample result: ' + x + ':' + y + ':' + width + ':' + height)
            }
        )
        //使用Promise来进行回调
        //虽然这样写着看起来像同步操作，但实际仍然是异步的，并不会阻塞执行来等待
        async function measureLayout() {
            try {
                var {
                    relativeX,
                    relativeY,
                    width,
                    height,
                } = await CallBackExample.measureLayoutToPromise(100, 100);
                ToastExample.show('measureLayoutToPromise result: ' + relativeX + ':' + relativeY + ':' + width + ':' + height, ToastExample.LONG);

                console.log(relativeX + ':' + relativeY + ':' + width + ':' + height);
            } catch (e) {
                console.error(e);
            }
        }

        measureLayout();
        // ImagePickerModule.pickImage()
        //     .then((msg) => {
        //         //此处为成功之后回调的信息（指的是：uri.toString() 的值 ）
        //         alert(msg);
        //     })
        //     .catch((err) => {
        //         //此处为失败之后回调的信息
        //         alert(err);
        //     });
        return (
            <ScrollView>
                <ViewExample numberSize={15} style={{width: 200, height: 30}}/>
                {/*<Button*/}
                {/*title='Go to App'*/}
                {/*onPress={() => navigate('App', {name: 'aa'})}/>*/}

                <Button
                    title='Go to StylesTest'
                    onPress={() => navigate('StylesTest')}/>
                <Button
                    title='Go to TextInputTest'
                    onPress={() => navigate('TextInputTest')}/>
                <Button
                    title='Go to FlexBox'
                    onPress={() => navigate('FlexBox')}/>
                <Button
                    title='Go to ScrollViewTest'
                    onPress={() => navigate('ScrollViewTest')}/>
                <Button
                    title='Go to helloWorldApp'
                    onPress={() => navigate('helloWorldApp')}/>
                <Button
                    title='Go to selfProps'
                    onPress={() => navigate('selfProps')}/>
                <Button
                    title='Go to StateTest'
                    onPress={() => navigate('StateTest')}/>
                <Button style={styles.hasBottom}
                        title='Go to FixedDimensionsBasics'
                        onPress={() => navigate('FixedDimensionsBasics')}/>
                <Button style={styles.hasBottom}
                        title='Go to FetchTest'
                        onPress={() => navigate('FetchTest')}/>
                <Button style={{marginTop: 20}}
                        title='Go to WebSocketTest'
                        onPress={() => navigate('WebSocketTest')}/>
                <Button style={styles.hasBottom}
                        title='Go to FlatListTest'
                        onPress={() => navigate('FlatListTest')}/>
                <Button
                    title='Go to Picker'
                    onPress={() => navigate('Picker')}/>
                <Button
                    title='Go to Switch'
                    onPress={() => navigate('Switch')}/>
                <Button
                    title='Go to ARTTest'
                    onPress={() => navigate('ARTTest')}/>
                <Button
                    title='Go to ChartExample'
                    onPress={() => navigate('ChartExample')}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    hasBottom: {
        borderBottomColor: '#ff0000',
        marginBottom: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
