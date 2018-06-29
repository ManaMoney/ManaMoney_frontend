import React, { Component } from 'react' ;
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage,
} from 'react-native';

export default class Mainpage extends Component {

    //set initial state
    state = {
        username: [],
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    //load initial state
    _loadInitialState = async () => {

        //get username from AsyncStrorage
        var value = await AsyncStorage.getItem('username');
        if (value !== null) {
            this.setState({username: value});
        }
    }

    render() {
        return(
            <View style={styles.container}>

                <Text>this is main page.</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    }
});