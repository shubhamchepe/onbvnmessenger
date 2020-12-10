import React from 'react';
import { Text, View, Button } from 'react-native';

 const ProfileScreen = ({navigation}) => {
    return(
        <View>
            <Text>
            ProfileScreen
            </Text>
            <Button title='SignIn' onPress={()=>navigation.push('SignIn')}/>
        </View>
    );
};

export default ProfileScreen;

