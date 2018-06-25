import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Picker,
} from 'react-native';
import Note from './note';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteArray: [],
            type:'Expenses',
            amount:'',
            category:'',
            details: '',

        };
    }
    render() {
        let notes = this.state.noteArray.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- LOG -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {notes}
                </ScrollView>
                <View >
                <Text>Type</Text>
                     <Picker
                        selectedValue={this.state.type}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                        <Picker.Item label="Expenses" value="Expenses" />
                        <Picker.Item label="Income" value="Income" />
                    </Picker>               
                     
                    <Text>Amount</Text>
                    <TextInput 
                        placeholder="Input amount spend/earn" 
                        value={this.state.amount} 
                        onChangeText = { (x) => this.setState({ amount: x}) } />
                    <Text>Category</Text>
                    <TextInput 
                        placeholder="Category" 
                        value={this.state.category} 
                        onChangeText = { (x) => this.setState({ category: x}) } />
                    <Text>Details</Text>    
                    <TextInput 
                        placeholder="Input details" 
                        value={this.state.details} 
                        onChangeText = { (x) => this.setState({ details: x}) } /> 
                   
            
                    
                    
                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
    addNote(){
        if(this.state.amount){
            var d = new Date();
            this.state.noteArray.push({
                'date':d.getFullYear()+
                "/"+(d.getMonth()+1) +
                "/"+ d.getDate(),
                'type': this.state.type,
                'amount': this.state.amount,
                'category': this.state.category,
                'details': this.state.details,

            });
            this.setState({ noteArray: this.state.noteArray });
            this.setState({amount:''});
            this.setState({details:''});
        }
    }
    deleteNote(key){
        this.state.noteArray.splice(key, 1);
        this.setState({noteArray: this.state.noteArray});
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 4,
        borderBottomColor: '#ddd',
        bottom:250,
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 17,

    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 60,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position:'absolute',
        width:60,
        height:60,
        backgroundColor:'blue',
        borderRadius:30,
        bottom:20,
        right:20,
        alignItems:'center',
        justifyContent:'center'
    },
    addButtonText: {
        fontSize:27,
        color:'white',
    }
});