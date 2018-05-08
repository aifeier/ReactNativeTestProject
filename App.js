/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, ScrollView, StyleSheet, FlatList, Text, View} from 'react-native';

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

import AAmpUtils from './native_modules/AAmpUtils.android'

type Props = {};
export default class App extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    }

    constructor(props) {
        super(props)
        AAmpUtils.LatLngConverterTOAAmp(30.278973333333337, 120.14591166666666, (latlng) => {
            console.log(latlng.latitude, latlng.longitude)
        })
        this.state = {
            data: [
                {
                    key: 'StylesTest',
                    title: 'Go to StylesTest',
                    sourceClass: 'StylesTest',
                },
                {
                    key: 'MapLocationExample',
                    title: 'Go to MapLocationExample',
                    sourceClass: 'MapLocationExample',
                },
                {
                    key: 'GeolocationExample',
                    title: 'Go to GeolocationExample',
                    sourceClass: 'GeolocationExample',
                },
                {
                    key: 'CountAppSource',
                    title: 'Go to CountAppSource',
                    sourceClass: 'CountAppSource',
                },
                {
                    key: 'aamp3d',
                    title: 'Go to aamp3d',
                    sourceClass: 'aamp3d',
                },
                {
                    key: 'TextInputTest',
                    title: 'Go to TextInputTest',
                    sourceClass: 'TextInputTest',
                },
                {
                    key: 'FlexBox',
                    title: 'Go to FlexBox',
                    sourceClass: 'FlexBox',
                },
                {
                    key: 'ScrollViewTest',
                    title: 'Go to ScrollViewTest',
                    sourceClass: 'ScrollViewTest',
                },
                {
                    key: 'selfProps',
                    title: 'Go to selfProps',
                    sourceClass: 'selfProps',
                },
                {
                    key: 'StateTest',
                    title: 'Go to StateTest',
                    sourceClass: 'StateTest',
                },
                {
                    key: 'FixedDimensionsBasics',
                    title: 'Go to FixedDimensionsBasics',
                    sourceClass: 'FixedDimensionsBasics',
                },
                {
                    key: 'FetchTest',
                    title: 'Go to FetchTest',
                    sourceClass: 'FetchTest',
                },
                {
                    key: 'WebSocketTest',
                    title: 'Go to WebSocketTest',
                    sourceClass: 'WebSocketTest',
                },
                {
                    key: 'FlatListTest',
                    title: 'Go to FlatListTest',
                    sourceClass: 'FlatListTest',
                },
                {
                    key: 'Picker',
                    title: 'Go to Picker',
                    sourceClass: 'Picker',
                },
                {
                    key: 'Switch',
                    title: 'Go to Switch',
                    sourceClass: 'Switch',
                },
                {
                    key: 'ARTTest',
                    title: 'Go to ARTTest',
                    sourceClass: 'ARTTest',
                },
                {
                    key: 'ChartExample',
                    title: 'Go to ChartExample',
                    sourceClass: 'ChartExample',
                },

            ],

        }
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

        // measureLayout();
        // ImagePickerModule.pickImage()
        //     .then((msg) => {
        //         //此处为成功之后回调的信息（指的是：uri.toString() 的值 ）
        //         alert(msg);
        //     })
        //     .catch((err) => {
        //         //此处为失败之后回调的信息
        //         alert(err);
        //     });

        //把data中数组的下标作为了唯一的key
        _keyExtractor = (item, index) => index;
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <ViewExample numberSize={15} style={{width: 200, height: 30}}/>
                <FlatList
                    data={this.state.data}
                    ItemSeparatorComponent={ItemDivideComponent}
                    keyExtractor={this._keyExtractor}
                    // extraData={this.state}
                    renderItem={({item}) => <Text style={{textAlign: 'center', padding: 5}}
                                                  onPress={() => navigate(item.sourceClass)}>{item.title}</Text>}
                />
            </ScrollView>
        )
    }
}

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{height: 1, backgroundColor: '#f9f9f9'}}/>
        );
    }
};

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
