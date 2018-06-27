import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon } from 'native-base';
import CustomHeader from '../Components/CustomHeader';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { Constants } from 'expo';

class UserScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "User",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/DrawerIcons/user.png')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            <Container style={styles.container} >

                <CustomHeader
                    title="User"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                <View style={{ paddingVertical: 20 }}>
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SiGN IN"
        onPress={()=> {alert('sign in leh');}}
      />
       <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SiGN UP"
        onPress={()=> {alert('sign up leh');}}
      />
    </Card>
  </View> 
                </Content>
                
            </Container>
        )
    }

}

export default UserScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    },
    container: {
        paddingTop: Constants.statusBarHeight,
    },
})