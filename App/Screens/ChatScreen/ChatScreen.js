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
 } from 'react-native';
 const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

 const ChatScreen = ({navigation}) => {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First Item",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second Item",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third Item",
        },
      ];
    return(
        <View>
            
        </View>
    );
};

export default ChatScreen;

