import React,{useState,useEffect} from 'react'
import { Text, View ,Image,TextInput, TouchableOpacity} from 'react-native'
import styles from '../styles/index';
import { connect } from 'react-redux';

import {

    change_variable,

} from "../action/index";

const SearchScreen = () => {
    const [favourites,setFavoruites] = useState('');
    const [search,setSearch] = useState('');


    const renderMovies = ({item}) =>{
        var textContent = item.favourites ? 'Remove from Favourites' : 'Add to Favourites';
        return(
            <View style={styles.renderCard}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity >
                    <Text >{textContent}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={[styles.flex,{backgroundColor:'#fff'}]}>
             <Text style={styles.header}>Favourites</Text>
             <View style={styles.searchBar} >
                 <Image source={require('../assets/search.png')}  style={{ width: 25, height: 25 }} />
                 <TextInput placeholder={'Search'} style={{marginLeft:10}} onChangeText={(e)=>setSearch(e)} value={search}/>
             </View>
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
export default SearchScreen
//  connect( mapStateToProps, {

//     change_variable,

// } )(  );

