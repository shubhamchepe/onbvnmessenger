import React from 'react';
import { Text, View, Button } from 'react-native';

export const SignIn = ({navigation}) => {
    return(
        <View>
            <Text>
            SignIn
            </Text>
            <Button title='CreateAccount' onPress={()=>navigation.push('CreateAccount')}/>
        </View>
    );
};


export const CreateAccount = ({navigation}) => {
    return(
        <View>
            <Text>
            CreateAccount
            </Text>
        </View>
    );
};
