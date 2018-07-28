import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Icon } from 'react-native-material-design';

import Splash from '../screens/Splash'
import Main from '../screens/Main'
import LoginScreen from '../screens/Login';
import Policy from '../screens/Policy';
import Entry from '../screens/Entry';
import Skill from '../screens/Skill';
import ScheduleStart from '../screens/Schedule';
import CancelSession from '../screens/CancelSession';
import Drawer from '../screens/Drawer';

import FeedbackEntry from '../screens/FeedbackEntry';

import Time from '../screens/Time';
import Place from '../screens/Place';
import ConfirmSession from '../screens/ConfirmSession';
import Records from '../screens/Records';
import UserAccountScreen from '../screens/UserAccount';
import UserPreferences from '../screens/UserPreferences';
import Instructions from '../screens/Instructions';
import TermsAndConditions from '../screens/TermsAndConditions';


/**NOTES
 * IMPORTANT: Set restrictions for cancelations!!!!!!!!!!!!!!!
 * Set system for sesions usage
 * In Content Stack, include a Feedback Stack.
 */

 /**INSTRUCTIONS AND TERMS STACK */
const InstructionsStack = TabNavigator({
    InstructionsUser: {
        screen: Instructions,
        navigationOptions: {
            title: 'Instrucciones',
            tabBarIcon: () => ( <Image
                style={{height:20, width:20}} 
                source={require('../assets/userMenu.png')} />)
        },
    },
    Terms: {
        screen: TermsAndConditions,
        navigationOptions: {
            title: 'Términos de uso',
            tabBarIcon: () => (<Image
                style={{height:20, width:20}} 
                source={require('../assets/lock.png')} />)
        }
    },
},
{   
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true, 
        allowFontScaling:true, 
        indicatorStyle: {
            backgroundColor: '#4682D4'
        },
        labelStyle: {
            color: "#00bfff",

        },
        style: {
            backgroundColor: '#eee',
            height: 60
        },
    }
})


/**USER STACK
 * Navigation Stack for related to customer accounts components. 
 * Account shows user information and information regarding billing and payment methods. 
 * Preferences is an input component that will recieve the user preferences regarding prefered topics, guides and app feedback and goals related with our services.*/
const UserStack = TabNavigator({
    Account: {
        screen: UserAccountScreen,
        navigationOptions: {
            tabBarLabel: "cuenta",
            tabBarIcon: () => (<Image
                                style={{height:20, width:20}} 
                                source={require('../assets/users.png')} />)
        }
    },
    Preferences: {
        screen: UserPreferences,
        navigationOptions: {
            tabBarLabel: "preferencias",
            tabBarIcon: () => (<Image
                                style={{height:20, width:20}} 
                                source={require('../assets/settings.png')} />)
        }
    },
},
{   
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: '#4682b4'
        },
        showLabel: false,
        showIcon: false,
        style: {
            height: 2,
            backgroundColor: '#777',
        },
    }
})


/**SCHEDULE STACK
 * Stack for scheduling sessions. Initial screen is set to be ScheduleStart.js, a component that allows the user to select the skill within each one of the main cores: Cotidiano y Profesional.
 * A second screen allows the user to select the time in which they want to have the session and the guide, this last one amongst a list of available ones at the time.
 * Next screen renders a map. Using geolocation in components/GeoLocation.js to display the map and services/GeoCoding.js to display the address string from coordinates.
 * Last one is the checkout screen. Pulls an object from services/DataManager.js which the recorded info in the past components, and pushes the new appointment into the user's database record.
 */
const ScheduleStack = TabNavigator({
    SkillSelect: {
        screen: ScheduleStart,
        navigationOptions: {
            tabBarLabel: "Tema",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/skill.png')} />)
        }
    },
    Place: {
        screen: Place,
        navigationOptions: {
            tabBarLabel: "Lugar",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/blueprint.png')} />)
        }
    },
    Guide: {
        screen: Time,
        navigationOptions: {
            tabBarLabel: "Guía",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/chatting.png')} />)
        }
    },
    CheckOut: {
        screen: ConfirmSession,
        navigationOptions: {
            tabBarLabel: "Confirma",
            tabBarIcon: () => (<Image
                                style={{height:25, width:25}} 
                                source={require('../assets/checkOut.png')} />)
        }
    },
},
{   
    swipeEnabled: true,
    tabBarOptions: {
        showIcon: true, 
        allowFontScaling:true, 
        indicatorStyle: {
            backgroundColor: '#4682D4'
        },
        labelStyle: {
            fontSize: 14,
            color: '#777'
        },
        style: {
            backgroundColor: '#FFF',
        },
    }
})


/**CONTENT STACK
 * Holds main screen. The user sees the main cores of our services: Cotidiano, profesional and gets direct entrance to schedule a session related. Also, sees an overview of their progress and the posibility to go from there to more specific topics such as strenghts, weaknesses and recommended actionsa and materials for each one.
 * This navigator sholud be the root for everything below the root, in order to allow acces to the drawer from anywhere in the app.
*/
const ContentStack = DrawerNavigator({
    Entry: {
        screen: Entry
    },
    Scheduling: {
        screen: ScheduleStack
    },
    Feedback: {
        screen: FeedbackEntry
    },
    Records: {
        screen: Records,
    },
    UserAccount: {
        screen: UserStack,        
    },
    Instructions: {
        screen: InstructionsStack
    },
    CancelSession: {
        screen: CancelSession
    }
},{
    drawerWidth: 300,
    contentComponent: props => <Drawer {...props} />,
})


/**LOGIN STACK
 * The stack of routes for navigating between login.js and register.js */
export const LoginStack = TabNavigator({
    Login: {
        screen: LoginScreen,

    },
    Register: {
        screen: Policy,
    }
},
{   
    navigationOptions: {
        tabBarVisible: false
    },
    swipeEnabled: true,
})

/**ROOT
 * Divides the app in four blocks:
 * A starting screen for welcoming users and giving them an overview of the bussiness.
 * An authentication zone, for login and register.
 * An account area, for setting information, preferences and payment methods.
 * A Schedule path, that allows users to access to our services. 
 * A minor in functionality, though important in content, terms and conditions and instructions area.
 */
export const Root = StackNavigator({
    Home: {
        screen: Main
    },
    Login: {
        screen: LoginStack
    },
    Content :{
        screen: ContentStack,
    },
    Skills: {
        screen: Skill
    },
},
{
    mode: 'modal',
    headerMode: 'none',
    initialRouteName: 'Home',
    gestures: 'true'
})
