import React, { Component } from "react";
import {View,Text, StyleSheet,Platform, TouchableOpacity,Picker} from "react-native";

import UserScreen from '../Page/UserScreen';
import Main from './addlog';
import { Card, Button, FormLabel, FormInput } from "react-native-elements";

//import stacknavigator here?

class Note extends React.Component {
    _submitForm = () => {
        this.props.navigation.navigate('Note');
        
    }
    render(){
        return(
          <View>
             <Card>
    <Picker
    selectedValue={this.state.type}
    style={{ height: 50, width: 150 }}
    onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
    <Picker.Item label="Expenses" value="Expenses" />
    <Picker.Item label="Income" value="Income" />
    </Picker> 
      <FormLabel>Amount</FormLabel>
      <FormInput placeholder="100.0" onChangeText={someFunction} />
      <FormLabel>Category</FormLabel>
      <FormInput placeholder="Food/Transport/.." />
      

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SUBMIT"
        onPress={()=> {alert('add leh');}}
      />
    </Card>
     
          </View>
    
    
        )
      }
    }


class Button1 extends React.Component {

    _click = () => {
        this.props.navigation.navigate('Note');
        
    }
   

    render(){
        return(
            <View>
                 
            <TouchableOpacity style={styles.btn}
            onPress={this._click}
            >
            <Text style = {styles.plus} >+</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn:{
        position:'absolute',
        width:50,
        height:50,
        backgroundColor:'blue',
        borderRadius:30,
        bottom:20,
        right:20,
        alignItems:'center',
        justifyContent:'center'
    },
    plus:{
        fontSize:25,
        color:'white',
    }
})


export default Button1



