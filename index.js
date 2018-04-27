import {StackNavigator} from 'react-navigation';
import React, {Component} from 'react'
import {AppRegistry, Button, ScrollView, StyleSheet,} from 'react-native'
import App from './App';
import helloWorldApp from './base/HelloWorldApp';
import selfProps from './base/SelfProps';
import StateTest from './base/StateTest'
import StylesTest from './base/StylesTest'
import FixedDimensionsBasics from './base/FixedDimensionsBasics'
import FlexBox from './base/FlexBox'
import TextInputTest from './base/TextInputTest'
import ScrollViewTest from './base/ScrollViewTest'
import FlatListTest from './base/FlatListTest'
import FetchTest from './base/FetchTest'
import WebSocketTest from './base/WebSocketTest'
import MainScreen from './base/ReactNavigationTest'
import Picker from './widget/Picker'
import Switch from './widget/Switch'
import CountApp from './CountApp'
import ARTTest from './base/ARTTest'
import NativeProps from './base/NativeProps'

const MainApp = StackNavigator({
    App: {screen: App},
    StylesTest: {screen: StylesTest},
    TextInputTest: {screen: TextInputTest},
    FlexBox: {screen: FlexBox},
    ScrollViewTest: {screen: ScrollViewTest},
    helloWorldApp: {screen: helloWorldApp},
    selfProps: {screen: selfProps},
    StateTest: {screen: StateTest},
    FixedDimensionsBasics: {screen: FixedDimensionsBasics},
    FetchTest: {screen: FetchTest},
    WebSocketTest: {screen: WebSocketTest},
    FlatListTest: {screen: FlatListTest},
    Picker: {screen: Picker},
    Switch: {screen: Switch},
    ARTTest: {screen: ARTTest},
})


// AppRegistry.registerComponent('MainApp', () => MainApp);
AppRegistry.registerComponent('MainApp', () => CountApp);
// AppRegistry.registerComponent('MainApp', () => ARTTest);
// AppRegistry.registerComponent('MainApp', () => NativeProps);
AppRegistry.registerComponent('App', () => App);
AppRegistry.registerComponent('MainScreen', () => MainScreen);
AppRegistry.registerComponent('helloWorldApp', () => helloWorldApp);
AppRegistry.registerComponent('StylesTest', () => StylesTest);
AppRegistry.registerComponent('StylesTest', () => StylesTest);
AppRegistry.registerComponent('TextInputTest', () => TextInputTest);
AppRegistry.registerComponent('FlexBox', () => FlexBox);
AppRegistry.registerComponent('ScrollViewTest', () => ScrollViewTest);
AppRegistry.registerComponent('selfProps', () => selfProps);
AppRegistry.registerComponent('StateTest', () => StateTest);
AppRegistry.registerComponent('FixedDimensionsBasics', () => FixedDimensionsBasics);
AppRegistry.registerComponent('FetchTest', () => FetchTest);
AppRegistry.registerComponent('WebSocketTest', () => WebSocketTest);
AppRegistry.registerComponent('FlatListTest', () => FlatListTest);
