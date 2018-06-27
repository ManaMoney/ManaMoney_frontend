import React, { Component } from "react";
import {View,Text,StyleSheet} from "react-native";
import{SafeAreaView} from "react-navigation";

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class CustomHeader extends Component {
    render() {
        return (
            <SafeAreaView>
            <Header>
                <Left><Icon name="ios-menu" onPress={() => this.props.drawerOpen()} /></Left>
                <Body>
                    <Title>MANA MONEY</Title>
                </Body>
                <Right />
            </Header>
            </SafeAreaView>
        );
    }
}
export default CustomHeader;