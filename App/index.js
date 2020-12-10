import React from 'react';
import { Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AuthContext} from './context';

import SignIn  from './Screens/SignIn/SignIn';
import CreateAccount from './Screens/CreateAccount/CreateAccount';
import ProfileScreen  from './Screens/ProfileScreen/ProfileScreen';
import ChatScreen  from './Screens/ChatScreen/ChatScreen';
import ScanScreen  from './Screens/ScanScreen/ScanScreen';
import SplashScreen  from './Screens/SplashScreen/SplashScreen';
import ForgotPassword from './Screens/ForgotPassword/ForgotPassword';
import {createStore} from 'redux';
import {Provider,useSelector,useDispatch} from 'react-redux';
import {reducer} from './Reducer/reducer';
import Icons from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';





const store = createStore(reducer);


const AuthStack = createStackNavigator();
const AuthStackScreen = ()=> (
<AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name='SignIn' component={SignIn} options={{title: 'Sign In'}}/>
    <AuthStack.Screen name='CreateAccount' component={CreateAccount} options={{title: 'Create Account'}}/>
    <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} options={{title: 'Forgot Password'}}/>
    </AuthStack.Navigator>
)
const Tabs = createBottomTabNavigator();
const AppStackScreen = ()=> (
    <Tabs.Navigator  tabBarOptions={{
        showLabel:false
      }} initialRouteName='Chats' screenOptions={({route})=>({
        tabBarIcon: ({color,size}) =>{
            let iconName 
            if(route.name == 'Scan'){
                iconName = 'qrcode'
            }
            else if(route.name == 'Chats'){
                iconName = 'comments'
            }
            else if(route.name == 'Profile'){
                iconName = 'user'
            }
            return  <Icons name={iconName} size={30} color="#924AA3" />
        }
    })}>
      <Tabs.Screen name='Scan' component={ScanStackScreen}/>  
      <Tabs.Screen name='Chats' component={ChatStackScreen}/>  
      <Tabs.Screen name='Profile' component={ProfileStackScreen}/>  
    </Tabs.Navigator>
    )
const ScanStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const RootStack = createStackNavigator();
const RootStackScreen = ({userToken}) =>(
    <RootStack.Navigator headerMode='none'>
        {!userToken ? <RootStack.Screen name="Auth" component={AuthStackScreen}/> 
        : <RootStack.Screen name="App" component={AppStackScreen}/>}
    </RootStack.Navigator>
)

const ScanStackScreen = () => (
    <ScanStack.Navigator>
        <ScanStack.Screen name='ScanScreen' component={ScanScreen}/>
        {/* <ScanStack.Screen name='ScanScreen' component={ScanScreen}/> */} 
        {/* we can add more screens here as a stack for this particular stack  */}
    </ScanStack.Navigator>
)

const ChatStackScreen = () => (
    <ChatStack.Navigator>
        <ChatStack.Screen name='ChatScreen' component={ChatScreen}/>
        {/* <ChatStack.Screen name='ChatScreen' component={ChatScreen}/> */}
        {/* we can add more screens here as a stack for this particular stack  */}
    </ChatStack.Navigator>
)

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen}/>
        {/* <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen}/> */}
        {/* we can add more screens here as a stack for this particular stack  */}
    </ProfileStack.Navigator>
)

export default () =>{
    const [isLoading,setLoading] = React.useState(true);
    const [userToken,setToken] = React.useState(null);
    
    

    const authContext = React.useMemo(()=>{
        return{
            signIn : (Token) => {
                setLoading(false);
                setToken(Token)
            },
            signUp : (Token) => {
                setLoading(false);
                setToken(Token);
            },
            signOut : () => {
                setLoading(false);
                setToken(null)
            }
        }
    },[])

    // const Login =  (eml,ps) =>{
    //     auth()
    //     .signInWithEmailAndPassword(eml,ps)
    //     .then(authRes => {
    //         const userObj = {
    //             email: authRes.user.email,
    //         };
    //         console.log(authRes)
    //         signIn(authRes.user.uid);
    //     }, authError => {
    //         console.log(authError);
    //         ChangesignupError('Failed to create user')
    //     })
    // }

    const signIn = (Token) => {
        setLoading(false);
        setToken(Token)
    }

    
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('AsyncValues');
      const parsedValue = JSON.parse(value)
      
      if(value !== null) {
            auth()
            .signInWithEmailAndPassword(parsedValue.email,parsedValue.password)
            .then(authRes => {
                console.log(authRes)
                signIn(authRes.user.uid);
            }, authError => {
                console.log(authError);
                ChangesignupError('Failed to create user')
            })
        
      

      }else{
          setLoading(false)
      }
    } catch(e) {
      console.log(e)
    }
  }

    React.useEffect(()=>{
       
    getData();
      
    },[])
    if(isLoading){
        return(
            
            <SplashScreen/>
        )
    }
    return(
        <Provider store={store}>
<AuthContext.Provider value={authContext} >
<NavigationContainer>
    <RootStackScreen userToken={userToken} />
</NavigationContainer>
</AuthContext.Provider>
</Provider>
    );
};


