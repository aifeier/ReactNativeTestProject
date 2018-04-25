import React, {
    Component
} from 'react';
import {
    FlatList,
    Text
} from 'react-native';

export default class FlatListText extends Component {
    static navigationOptions = {
        title: 'FlatListText',
    }
    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'},]}
                renderItem={({item}) => <Text>{item.key}</Text>}
            />
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
