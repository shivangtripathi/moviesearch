import { StyleSheet, Dimensions, Platform } from 'react-native';

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const PRIMARY = "#000";
const GREY_DARK = "#999";

export default StyleSheet.create({
    align_center:{
        alignItems:'center',
        justifyContent:'center',
    },
    movieBox:{
        width:WIDTH/1.5,
       justifyContent:'center',
        alignSelf:'center',
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        color:"#fff",
    },
    addText:{
        fontWeight:'bold',
        color:'white',
        paddingVertical:10,
        paddingHorizontal:20
    },
    secondary_label:{
        fontSize:15,
        fontWeight:'bold',
        color:PRIMARY,
        marginTop:40,
    },
    form:{
        paddingTop:10,
        paddingHorizontal:20,
        alignSelf:'center',
        borderTopColor:PRIMARY,
        borderTopEndRadius:10,
        borderTopStartRadius:10,
        borderTopWidth:3,
        borderBottomColor:PRIMARY,
        borderBottomEndRadius:10,
        borderBottomStartRadius:10,
        borderBottomWidth:2,
        borderWidth:2,
        minWidth:WIDTH/2,
        height:HEIGHT/3,
        justifyContent:'center',
    },
    loginText:{
        fontWeight:'bold',
        color:'white',
        paddingVertical:10,
        paddingHorizontal:20
    },
    button:{
        minWidth:WIDTH/2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'red',
        color:'#fff',
        borderRadius:5,
        marginTop:40,
    },
    marginTop_20:{
        marginTop:20,
    },
    marginTop_10:{
        marginTop:10,
    },
    paddingTop_20:{
       paddingTop:20,
    },
    paddingTop_10:{
        paddingTop:10,
    },
    padding_20:{
        paddingHorizontal:20,
    },
    flex:{
        flex:1,
        flexDirection:'column',
        },
    heading:{
        fontSize:22,
        fontWeight:'bold',
        color:"#fff",
        marginBottom:40,
    },
    registerButton:{
        width:WIDTH/2,
        height:30,
    },
    registerText:{
        color:'red',
        marginTop:20,
    },
    header:{
        fontWeight:'bold',
        fontSize:22,
        color:PRIMARY,
        marginTop:60,
        marginHorizontal:20,
    },
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
        paddingTop:20,
        borderBottomWidth:2,
        borderColor:'#000',
        marginHorizontal:20,
    }
})