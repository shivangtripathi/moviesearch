import React from 'react'
import { Text, View, } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../styles/index';
import { connect } from 'react-redux';
import database from '@react-native-firebase/database';

const itemRef =  database().ref('/');

import {

    change_variable,

} from "../action/index";
import { useState } from 'react';

const HomeScreen = (props) => {
    const add = () =>{
        itemRef.push({'title':props.movieName,'description':props.movieDescription});
        setMovieName('');
        setMovieDescription('');
    }
    const [movieName,setMovieName] = useState('');
    const [movieDescription,setMovieDescription] = useState('');
    return (
        <View style={[styles.flex,{backgroundColor:'#fff'}]}>
            <Text style={styles.header}>Add Movies to favourites</Text>
            <View style={styles.movieBox}>
                <Text style={styles.secondary_label}>Movie Name</Text>
                <TextInput placeholder={'enter movie name'} value={movieName}  onChangeText={(e)=>setMovieName(e)} underlineColorAndroid={'red'} placeholderTextColor={'#000'}  style={styles.align_center} />
                <Text style={styles.secondary_label,styles.marginTop_20}>Movie Description</Text>
                <TextInput multiline={true} value={movieDescription} onChangeText={(e)=>setMovieDescription(e)}  placeholder={'enter movie  description'} underlineColorAndroid={'red'} placeholderTextColor={'#000'}   style={styles.align_center} />
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>add()}>
                <Text style={styles.addText}>Add to favourites</Text>
            </TouchableOpacity>
        </View>
    )
}


// const mapStateToProps = (state) =>{
//     const {
        
//         movie_name,
//         movie_description,

//     } = state.variables;
//     return {
        
//         movie_name,
//         movie_description,

//     };
// }
export default HomeScreen
// connect( mapStateToProps, {

//     change_variable,

// } )(  );