import React from 'react';
import { Text, View, Button } from 'react-native';
import {AuthContext} from '../../context'


 const ScanScreen = ({navigation}) => {
    const {signOut} = React.useContext(AuthContext); 

    return(
        <View>
            <Text>
            ScanScreen
            </Text>
            <Button title='SignIn' onPress={()=>navigation.push('SignIn')}/>
            <Button title='SignOut' onPress={()=>signOut()}/>
        </View>
    );
};

export default ScanScreen;

