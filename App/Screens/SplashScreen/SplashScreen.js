import React from 'react';
import { Text, View, Button ,StyleSheet,StatusBar} from 'react-native';
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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useSelector,useDispatch} from 'react-redux';



 const SplashScreen = ({navigation}) => {
//   const {signIn} = React.useContext(AuthContext);

//   const dispatch = useDispatch();

//   const email = useSelector(state => {
//     return state.email
//   })

    
//   const password = useSelector(state => {
//     return state.password
//   })

//   const Login =  (email,password) =>{
//     auth()
//     .signInWithEmailAndPassword(email,password)
//     .then(authRes => {
//         console.log(authRes)
//         signIn(authRes.user.uid);
//     }, authError => {
//         console.log(authError);
//         ChangesignupError('Failed to create user')
//     })
// }
// React.useEffect(()=>{
       
//   Login(email,password)
    
//   },[])
    return(
        <View style={{
            flex: 1,
            backgroundColor: bgcolor,
            alignItems: "center",
            justifyContent: "center",
        }}>
              <StatusBar backgroundColor={bgcolor} barStyle='light-content'/>
            <View style={{position:'absolute',zIndex:-5}}>
             <Svg width="461.189" height="824" viewBox="0 0 461.189 824">
               <G id="Rectangle_6" data-name="Rectangle 6" transform="translate(88.189 494)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.04">
                  <Rect width="56" height="50" stroke="none"/> 
                  <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/> 
               </G>
               <G id="Rectangle_7" data-name="Rectangle 7" transform="translate(103.189 218)" fill="#070711" stroke="#707070" stroke-width="1" opacity="0.05">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Rectangle_8" data-name="Rectangle 8" transform="translate(291.189 121)" fill="#36aab3" stroke="#707070" stroke-width="1" opacity="0.19">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Rectangle_9" data-name="Rectangle 9" transform="translate(53.189 71)" fill="#7e3333" stroke="#707070" stroke-width="1" opacity="0.19">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Rectangle_10" data-name="Rectangle 10" transform="translate(41.189 654)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.04">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Rectangle_11" data-name="Rectangle 11" transform="translate(339.189 544)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.04">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Rectangle_12" data-name="Rectangle 12" transform="translate(263.189 686)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.04">
    <Rect width="56" height="50" stroke="none"/>
    <Rect x="0.5" y="0.5" width="55" height="49" fill="none"/>
  </G>
  <G id="Ellipse_6" data-name="Ellipse 6" transform="translate(380.189)" fill="#e0279b" stroke="#707070" stroke-width="1" opacity="0.16">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Ellipse_7" data-name="Ellipse 7" transform="translate(314.189 302)" fill="#474747" stroke="#707070" stroke-width="1" opacity="0.26">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Ellipse_8" data-name="Ellipse 8" transform="translate(70.189 288)" fill="#676767" stroke="#707070" stroke-width="1" opacity="0.18">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Ellipse_9" data-name="Ellipse 9" transform="translate(395.189 408)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.12">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Ellipse_11" data-name="Ellipse 11" transform="translate(207.189 166)" fill="#c5cc5b" stroke="#707070" stroke-width="1" opacity="0.18">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Ellipse_12" data-name="Ellipse 12" transform="translate(111.189 761)" fill="#fff" stroke="#707070" stroke-width="1" opacity="0.22">
    <Ellipse cx="33" cy="31.5" rx="33" ry="31.5" stroke="none"/>
    <Ellipse cx="33" cy="31.5" rx="32.5" ry="31" fill="none"/>
  </G>
  <G id="Polygon_1" data-name="Polygon 1" transform="translate(0 660.696) rotate(-71)" fill="#3a00ff" opacity="0.11">
    <Path d="M 277.1344299316406 240.5 L 0.8655767440795898 240.5 L 139 1.000748157501221 L 277.1344299316406 240.5 Z" stroke="none"/>
    <Path d="M 139 2.00152587890625 L 1.731170654296875 240 L 276.2688293457031 240 L 139 2.00152587890625 M 139 0 L 278 241 L 0 241 L 139 0 Z" stroke="none" fill="#707070"/>
  </G>
              </Svg>
              </View>
             
              <Text style={{
            color: textcolor,
            fontFamily: 'Poppins-Bold',
            fontSize:30
        }}>
            onbvn
            </Text>
            <Text style={{
            color: textcolor,
            fontFamily: 'Poppins-Light',
            fontSize:15,
            bottom:13,
            
        }}>
            messenger
            </Text>
             
         
          
        </View>
    );
};

export default SplashScreen;

