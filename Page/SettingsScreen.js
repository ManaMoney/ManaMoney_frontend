import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    Picker,
} from "react-native";

import { Container, Content, Icon } from 'native-base';
import CustomHeader from '../Components/CustomHeader';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";


class SettingsScreen extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            <Image
                source={require('../assets/DrawerIcons/settings.png')}
                style={[styles.icon]}
            />

    })

    render() {
        return (

            <Container>
                <Content>
                <CustomHeader
                    title="Settings"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                
                
                <View style={{ paddingVertical: 20 }}>
    <Card>
   
      <FormLabel>Budget</FormLabel>
      <TextInput 
            placeholder="budget for the month" 
        />
      
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SUBMIT"
        onPress={()=> this.props.navigation.navigate('Home')}
      />
    </Card>
  </View>


                <Button
                        
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default SettingsScreen

const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})