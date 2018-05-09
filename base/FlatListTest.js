import React, {Component} from 'react';
import {FlatList, Image, View,} from 'react-native';

export default class FlatListText extends Component {
    static navigationOptions = {
        title: 'FlatListText',
    }

    state = {
        data: [
            {img: 'http://img.zcool.cn/community/01058a556895750000012716d39e4e.jpg@3000w_1l_2o_100sh.jpg'},
            {img: 'http://img.zcool.cn/community/01e7d3591a7392b5b3086ed49a3358.jpg'},
            {img: 'https://up.enterdesk.com/edpic_source/63/6a/4e/636a4ecd6798a6382376ec8515378065.jpg'},
            {img: 'http://pic.yesky.com/uploadImages/2017/049/22/PJ56F1DL4KX1.jpg'},
            {img: 'http://pic1.win4000.com/wallpaper/e/53d9b5d3ac578.jpg'},
            {img: 'http://image.tianjimedia.com/uploadImages/2017/049/32/V8DH14EZ5FR0.jpg'},
            {img: 'http://pic.yesky.com/uploadImages/2017/049/25/6H7V764P6L0Z.jpg'},
            {img: 'http://pic.yesky.com/uploadImages/2017/049/39/2575Y4J0O175.jpg'},
        ]
    }
    //把data中数组的下标作为了唯一的key
    _keyExtractor = (item, index) => index + '';

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => <View >
                        < Image style={{height: 200}}
                                resizeMode='contain'
                                source={{uri: item.img}}/>
                    </View>}
                />
            </View>
        )
    }
}

class MyListItem extends React.PureComponent {
    _onPress = () => {
        this.props.onPressItem(this.props.id);
    };

    render() {
        return (
            <SomeOtherWidget
                {...this.props}
                onPress={this._onPress}
            />
        )
    }
}

class MyList extends React.PureComponent {
    state = {selected: (new Map(): Map<string, boolean>)};

    _keyExtractor = (item, index) => item.id;

    _onPressItem = (id: string) => {
        // updater functions are preferred for transactional updates
        this.setState((state) => {
            // copy the map rather than modifying state.
            const selected = new Map(state.selected);
            selected.set(id, !selected.get(id)); // toggle
            return {selected};
        });
    };

    _renderItem = ({item}) => (
        <MyListItem
            id={item.id}
            onPressItem={this._onPressItem}
            selected={!!this.state.selected.get(item.id)}
            title={item.title}
        />
    );

    render() {
        return (
            <FlatList
                data={this.props.data}
                extraData={this.state}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        );
    }
}
