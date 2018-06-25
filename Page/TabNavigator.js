import { createMaterialTopTabNavigator, TabView } from 'react-navigation'
import Icon from "react-native-vector-icons/FontAwesome";

//import stackNav from './stacknav';
import Daily from './daily';
import Weekly from './weekly';
import Monthly from './monthly';
import Yearly from './yearly';

//same name may be the porblem
//rmb to nest Tab in each stack navigator

const Tab = createMaterialTopTabNavigator({
    TabItem1: {
        screen: Daily,
        navigationOptions: {
            tabBarLabel:"Daily",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
        }},
    
    TabItem2: {
       screen: Weekly,
        navigationOptions: {
            tabBarLabel:"Weekly",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
            }},
    TabItem3: {
        screen: Monthly,
        navigationOptions: {
            tabBarLabel:"Monthly",
            tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
            }},            
            TabItem4: {
                screen: Yearly,
                navigationOptions: {
                    tabBarLabel:"Yearly",
                    tabBarIcon: ({ tintColor }) => <Icon name={"glass"} size={30} color={tintColor} />
                    }},   



})

export default Tab;