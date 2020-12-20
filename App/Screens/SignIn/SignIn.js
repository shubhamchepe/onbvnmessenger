import React, {useContext,useEffect,useState} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import SplashScreen from '../SplashScreen/SplashScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icons from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../../context';
import {widthPercentageToDP, heightPercentageToDP} from '../../RF/RF';
import {bgcolor, textcolor, bgcolorw, textcolorw} from '../../Constants/Colors';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {useSelector, useDispatch} from 'react-redux';
import NetInfo from "@react-native-community/netinfo";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';




const SignIn = ({navigation,store}) => {
  const {signIn} = React.useContext(AuthContext);
  //const [SignInText, changeSignInText] = React.useState('Sign in with');
  const dispatch = useDispatch();
  const SignInText = useSelector(state => {
      return state
  }) 
  const GlobalNetInfo = useSelector(state => {
    return state.ipadr
  })
  const GlobalNetInfo1 = useSelector(state => {
    return state.iscon
  })
  const ColourChange = useSelector(state => {
    return state.statusbarcolour
  })

  const reduxemail = useSelector(state => {
    return state.email
  })

    
  const reduxpassword = useSelector(state => {
    return state.password
  })
  const [email, changeEmail] = React.useState('');
  const [password, changePassword] = React.useState('');
  const [signupError, ChangesignupError] = React.useState('');
  const [netInfo, setNetInfo] = React.useState('');
  const [tkn, settkn] = React.useState('');

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener((state) => {
      setNetInfo(state.details.ipAddress);
      if(state.details.ipAddress == undefined){
        ChangesignupError('Please check your network connection')
        dispatch({type:'ipundefined',payload:{
          ipadr:state.details.ipAddress,
          iscon:state.type,
          statusbarcolour :"red"
        }})
        
      }else{
        ChangesignupError('')
        dispatch({type:'ipundefined',payload:{
          ipadr:state.details.ipAddress,
          iscon:state.type,
          statusbarcolour :"#2F1A46"
        }})
      }
    });
      
    return () => {
      // Unsubscribe to network state updates
      unsubscribe();

    };
  }, []);

  const Login = (email,password) => {
          auth()
          .signInWithEmailAndPassword(email,password)
          .then(authRes => {
              console.log(authRes)
              settkn(authRes.user.uid);
              signIn(authRes.user.uid);
          }, authError => {
              console.log(authError);
              ChangesignupError('Failed to create user')
          })
      
    
  }

  const getNetInfo = () => {
    // To get the network state once
    NetInfo.fetch().then((state) => {
      alert(
        `Connection type: ${state.type}
        Is connected?: ${state.isConnected}
        IP Address: ${state.details.ipAddress}`,
      );
      dispatch({type:'ipundefined',payload:{
        ipadr:state.details.ipAddress,
        iscon:state.type
      }})
      console.log(GlobalNetInfo)
    });
  };




const changeColour = () => {
  if(ColourChange === 'green'){
    setTimeout(() => {
      dispatch({type:'ipundefined',payload:{
        statusbarcolour :"#2F1A46"
      }})
    }, 2000);
  }
}

  return (
    <KeyboardAvoidingView  style={styles.container} behavior={Platform.OS == "ios" ? "padding" : "height"} > 
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* {GlobalNetInfo == undefined ? (<StatusBar backgroundColor="red" barStyle='light-content'/>) : <StatusBar backgroundColor={statusbar.one} barStyle='light-content'/>} */}
    <StatusBar backgroundColor={ColourChange} barStyle='light-content'/>
      <View style={styles.box}>
        <Svg width="393" height="365" viewBox="0 0 393 365">
          <G
            id="Rectangle_7"
            data-name="Rectangle 7"
            transform="translate(50 218)"
            fill="#070711"
            stroke="#707070"
            stroke-width="1"
            opacity="0.05">
            <Rect width="56" height="50" stroke="none" />
            <Rect x="0.5" y="0.5" width="55" height="49" fill="none" />
          </G>
          <G
            id="Rectangle_8"
            data-name="Rectangle 8"
            transform="translate(238 121)"
            fill="#36aab3"
            stroke="#707070"
            stroke-width="1"
            opacity="0.19">
            <Rect width="56" height="50" stroke="none" />
            <Rect x="0.5" y="0.5" width="55" height="49" fill="none" />
          </G>
          <G
            id="Rectangle_9"
            data-name="Rectangle 9"
            transform="translate(0 71)"
            fill="#7e3333"
            stroke="#707070"
            stroke-width="1"
            opacity="0.19">
            <Rect width="56" height="50" stroke="none" />
            <Rect x="0.5" y="0.5" width="55" height="49" fill="none" />
          </G>
          <G
            id="Ellipse_6"
            data-name="Ellipse 6"
            transform="translate(327)"
            fill="#e0279b"
            stroke="#707070"
            stroke-width="1"
            opacity="0.16">
            <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none" />
            <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none" />
          </G>
          <G
            id="Ellipse_7"
            data-name="Ellipse 7"
            transform="translate(261 302)"
            fill="#fcfcfc"
            stroke="#707070"
            stroke-width="1"
            opacity="0.26">
            <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none" />
            <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none" />
          </G>
          <G
            id="Ellipse_8"
            data-name="Ellipse 8"
            transform="translate(17 288)"
            fill="#fff"
            stroke="#707070"
            stroke-width="1"
            opacity="0.18">
            <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none" />
            <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none" />
          </G>
          <G
            id="Ellipse_11"
            data-name="Ellipse 11"
            transform="translate(154 166)"
            fill="#c5cc5b"
            stroke="#707070"
            stroke-width="1"
            opacity="0.18">
            <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none" />
            <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none" />
          </G>
        </Svg>
      </View>
      <View style={styles.box2}>
        <View style={{paddingLeft: 15}}>
          <Text
            style={{
              color: textcolor,
              fontFamily: 'Poppins-Light',
              fontSize: 23,
            }}>
            Login with
          </Text>
          <Text
            style={{
              color: textcolor,
              fontFamily: 'Poppins-Bold',
              fontSize: 30,
            }}>
            onbvn messenger
          </Text>
        <Text  style={{
              color: 'red',
              fontFamily: 'Poppins-Bold',
              fontSize: 10,
        }}>{signupError}</Text>
   
        </View>
        <View style={{alignItems:'center'}}>
          <TextInput 
           style={{borderWidth: 1,borderColor:'#F86D70',
           backgroundColor:'#fff',height:heightPercentageToDP('7%'),width:widthPercentageToDP('95%'),
           padding: 5,borderRadius:25,marginTop:20,paddingLeft:40,fontSize:20}} placeholder='email' placeholderTextColor='#73777C'
           value={email}
           onChangeText={(email) => changeEmail(email)}
           />
             <TextInput 
           style={{borderWidth: 1,borderColor:'#F86D70',
           backgroundColor:'#fff',height:heightPercentageToDP('7%'),width:widthPercentageToDP('95%'),
           padding: 5,borderRadius:25,marginTop:20,paddingLeft:40,fontSize:20}} placeholder='password' placeholderTextColor='#73777C'
           value={password}
           onChangeText={(password) => changePassword(password)}
           />
      </View>
      
      <View>
          <View style={{alignItems:'flex-end'}}>
          <TouchableOpacity style={{borderWidth: 1,borderColor:'#F86D70',
           backgroundColor:'#fff',height:heightPercentageToDP('7%'),width:widthPercentageToDP('30%'),
           paddingRight: 5,borderRadius:25,marginTop:20,marginRight:15,fontSize:20,alignItems:'center',justifyContent:'center'}} 
           onPress= {()=> Login(email,password)}>
            <Icons name="location-arrow" size={30} color="#924AA3" />
          </TouchableOpacity>
          </View>
          <View style={{alignItems:'flex-start',marginLeft:15,bottom:28}}>
            
                  <TouchableOpacity onPress= {()=> dispatch({type:'signupwith',payload:'Sign in with'})}>
                  {/* dispatch({type:'signupwith',payload:'Sign in with'}) */}
                  <Text style={{color: textcolor,fontFamily: 'Poppins-Light',fontSize: 15}}>Forgot password ?</Text>
                </TouchableOpacity>

          
          </View>
          
      </View>
      <View style={{alignItems:'center',bottom:5}}>
    
              <TouchableOpacity onPress= {()=>navigation.push('CreateAccount')}>
              {/* dispatch({type:'signinwith',payload:'Sign up with'}) */}
              <Text style={{color: textcolor,fontFamily: 'Poppins-Light',fontSize: 15}}>Don't have account? Sign Up</Text>
              </TouchableOpacity>
         
      </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );


};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F1A46',
    zIndex: -5,
  },
  box2: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
    backgroundColor: '#2F1A46',
  },
  box3: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('35%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00FF2B',
  },
  InputStyle: {
    borderWidth: 1,
    borderColor: '#F86D70',
    backgroundColor: '#fff',
    height: heightPercentageToDP('7%'),
    width: widthPercentageToDP('90%'),
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    paddingLeft: 40,
    fontSize: 20,
  },
});

export default SignIn;
