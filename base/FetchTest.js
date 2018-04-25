/*
网络请求*/
import React, {
    Component
} from 'react'

import {
    View,
    Text,
} from 'react-native';

function runAsync() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("搞定");
            resolve('这次成功了');
        }, 2000)
    })
    return promise
}

function testPromise() {
    runAsync().then(function (data) {
        console.log(data);
    })
}

 function testFetch() {
     fetch('https://facebook.github.io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson)=>{
            console.log(responseJson.movies);
            return responseJson.movies;
        })
        .catch((error) =>{
            console.log(error);
        });
}

export default class FetchTest extends Component {
    render() {
        testPromise();
        testFetch();
        let msg = '哈哈哈';
        return (
            <View style={{padding: 10}}>
                <Text style={{textAlign: 'center'}}>{msg}</Text>
            </View>
        )
    }
}