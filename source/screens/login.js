import React from 'react'
import { useState } from 'react';
import { Text, TouchableOpacity, View,TextInput } from 'react-native'
import styles from '../styles/index';

const LoginScreen = (props) => {
    const navigation = () => {
        props.navigation.push('HomeStack')
    };
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const renderTitle = () =>{
        return(
            <View style={[styles.align_center,styles.marginTop_20]}>
                    <Text style={styles.heading}>Movie Search</Text>
            </View>
        )
    }
    const renderLoginForm = () =>{
        return(
            <View style={[styles.form,styles.marginTop_10]}>
                    <Text style={[styles.label,styles.marginTop_10]}>Username</Text>
                    <TextInput value={username} onChangeText={(e)=>setUsername(e)} placeholder={'enter username'} underlineColorAndroid={'red'} placeholderTextColor={'#f5f5f5'}  style={styles.align_center}/>
                    <Text style={[styles.label,styles.marginTop_20]}>Password</Text>
                    <TextInput  value={password} onChangeText={(e)=>setPassword(e)}  placeholder={'enter password'} underlineColorAndroid={'red'} placeholderTextColor={'#f5f5f5'}  secureTextEntry={true} style={styles.align_center} />
                    <TouchableOpacity style={styles.button} onPress={()=>navigation()}><Text style={styles.loginText}>Login</Text></TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={[styles.flex,styles.padding_20,styles.marginTop_20,{        backgroundColor:'#000'
    }]}>
           {renderTitle()}
           {renderLoginForm()}
        </View>
    )
}

export default LoginScreen

