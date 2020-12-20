import React from 'react';
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
  SafeAreaView,
  StatusBar,
  FlatList,Image
 } from 'react-native';
 import ChatlistComponent from '../ChatScreen/ChatScreen';
 import {bgcolor, textcolor, bgcolorw, textcolorw,chatListbg,chatListitemY} from '../../Constants/Colors';

//  const Item = ({ item, onPress, style }) => (
//     <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );

 const ChatScreen = ({navigation}) => {
  const Item = ({ title , msg, time, count, read}) => (
    <View style={[styles.item, {backgroundColor:read == true ? textcolor : chatListitemY}]}>
     <View style={styles.ListLeft}>
      <View>
      <Image style={styles.dp}
       source={require('../../Assets/dp.png')} />
      </View>
      <View style={{marginLeft:15}}>
      <Text style={styles.title}>{title}</Text>
       <Text style={styles.msg}>{msg}</Text>
     </View>
    </View>
    <View style={styles.ListRight}>
      <View>
        {read == true ? (
          <View></View>
        ) : (
          <View style={{width: 30, height: 30, borderRadius: 15, backgroundColor: '#6F6F6F',alignItems: 'center',justifyContent:'center'}}>
          <Text style={styles.count}>{count}</Text>
          </View> 
        )}
      </View>
      <View>
       <Text style={styles.msg}>{time}</Text>
     </View>
    </View>
    </View>
  );
  const renderItem = ({ item }) => (
    <Item title={item.title} msg={item.msg} time={item.time} count={item.count} read={item.read}/>
  );
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
          msg: "message1",
          time: "14:23",
          count: "3",
          read: false
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
          msg: "message2",
          time: "14:23",
          count: "3",
          read: false
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
          msg: "message3",
          time: "Yesterday",
          count: "0",
          read: true
        },
      ];
    return(
       <SafeAreaView style={styles.container}>
         <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}/>
       </SafeAreaView>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: chatListbg
  },
  item: {
    flex:1,
    flexDirection:'row',
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 5,
    justifyContent:'space-between'
  },
  ListLeft:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start',
  },
  ListRight:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight:'700',
    color:'#6F6F6F'
  },
  msg:{
    fontSize: 15,
    color:'#6F6F6F'
  },
  time:{
    fontSize: 15,
    top: 10,
    color:'#6F6F6F'
  },
  count:{
    fontSize: 15,
    color:'#fff'
  },
  dp:{
  width:50,
  height:50,
  borderRadius:25
  
  }
});