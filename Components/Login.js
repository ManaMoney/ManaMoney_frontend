import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    AsyncStorage,
    ImageBackground,
    Dimensions,
    Button,
} from 'react-native';

import { Constants, } from 'expo';
import { createStackNavigator, } from 'react-navigation';

import Signup from './Signup';
import image from './background.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    login = () => {

        //post data to the backend pt
        //must fetch data via client IP, 'localhost' will never work
        fetch('', {
            method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
                body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                })
        })

        .then((response) => response.json())
        .then((res) => {
            
            //if our response is true, as set in route/users
            if (res.success === true) {
                var username = res.message;

                //we use AsyncStorage to store the users username
                AsyncStorage.setItem('username',username);

                //then we redirect to Mainpage
                this.props.navigator.push({
                    id: 'Mainpage'
                });

            //if login did not succeed, show errormessage
            } else {
                alert(res.message);
            }
        })
    .done();

    }

    render() {

        return (

            <ImageBackground source = { image } style = {styles.backgroundImage}>
                <View style = {styles.container}>
                    <View style={styles.content}>
                        <Text style = {styles.logo}> ManaMoney </Text>

                        <View style = {styles.inputContainer}>

                            <TextInput underlineColorAndroid="transparent" style = {styles.input}
                                onChangeText = { (username) => this.setState({username}) } 
                                value = {this.state.username} placeholder = 'username(email)'>
                            </TextInput>

                            <TextInput secureTextEntry = {true}
                                underlineColorAndroid="transparent" style = {styles.input}
                                onChangeText = { (password) => this.setState({password}) }
                                value = {this.state.password} placeholder='password'>
                            </TextInput>

                        </View>

                        <TouchableOpacity onPress={this.login} style={styles.buttonContainer}>
                            <Text style = {styles.buttonText}> LOGIN </Text>
                        </TouchableOpacity>

                        <Text style={styles.white}>No account? Sign up now!</Text>

                        {/* <Button style={styles.white}
                            title=" Sign up now."
                            onPress={() => this.props.navigation.navigate('SignupPage')}
                        /> */}

                    </View>
                </View>
            </ImageBackground>
            
        );
    }

};

// export default RootStack = createStackNavigator(
//     {
//       SignupPage: Signup,  
//       LoginPage: Login,
//     },
//     {
//       initialRouteName: 'LoginPage',
//     }
// );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    backgroundImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        paddingTop: Constants.statusBarHeight,
    },
    content: {
        alignItems: 'center',
    },
    logo: {
        color: 'white',
        fontSize: 40,
        fontStyle: 'normal',
        fontWeight: 'bold',
        textShadowColor: '#252525',
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 15,
        marginBottom: 20,
    },
    inputContainer: {
        margin: 20,
        marginBottom: 0,
        padding: 20,
        paddingBottom: 10,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    input: {
        fontSize: 16,
        height: 40,
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,1)',
    },

    white: {
        color: 'white',
        fontSize: 15,
    },

    buttonContainer: {
        alignSelf: 'stretch',
        margin: 20,
        padding: 20,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});