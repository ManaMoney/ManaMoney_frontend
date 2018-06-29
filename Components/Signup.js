import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
} from 'react-native';

import { Constants, } from 'expo';
import { createStackNavigator, } from 'react-navigation';
import t from 'tcomb-form-native';

import Login from './Login';
import image from './background2.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    username: t.maybe(t.String),
    password: t.String,
    terms: t.Boolean,
  });

const options = {
    fields: {
      email: {
        error: 'Without an email address how are you going to reset your password when you forget it?'
      },
      password: {
        error: 'Choose something you use on a dozen other sites or something you won\'t remember'
      },
      terms: {
        label: 'Agree to Terms',
      },
    },
  };

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
    }

    handleSubmit = () => {
        const value = this._form.getValue(); // use that ref to get the form value
        console.log('value: ', value);
    }

    render() {

        return (
            
            <ImageBackground source = { image } style = {styles.backgroundImage}>
                <View style = {styles.container}>
                    <View style={styles.content}>
                        <Text style = {styles.logo}> ManaMoney </Text>

                        <View style = {styles.inputContainer}>

                            <Form underlineColorAndroid="transparent" style = {styles.white}
                                ref={c => this._form = c}
                                type={User} 
                                options={options} // pass the options via props
                            />

                        </View>

                        <TouchableOpacity onPress={this.handleSubmit} style={styles.buttonContainer}>
                            <Text style = {styles.buttonText}> SIGN UP </Text>
                        </TouchableOpacity>

                        <Text style={styles.white}>Have an account? Login now! </Text>

                        {/* <Button style={styles.white}
                            title=" Login now."
                            onPress={() => this.props.navigation.goBack()}
                        /> */}

                    </View>
                </View>
            </ImageBackground>
            
        );
    }
}

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
    },

});