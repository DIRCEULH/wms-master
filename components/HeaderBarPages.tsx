import React, { useState } from 'react';  
import {View, StyleSheet, Image,Pressable,Text, Modal} from 'react-native';  
import {Feather as Icon} from '@expo/vector-icons';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login:undefined;
    Index:undefined;
};

const HeaderBar = () => { 
       
const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const [modalVisible, setModalVisible] = useState(false);
    
    function handleNavigationToMenu(){
        navigation.navigate('Index');
    }

    function handleNavigationToLogin(){
        navigation.navigate('Login');
        setModalVisible(false);
    }

    const state = useNavigationState(state => state);
    const currentRoute = state.routes[state.routes.length - 1].name;


    return (  
        <View style={styles.header}> 
            <View>
                {currentRoute !== 'Index' && (
                    <Pressable onPress={handleNavigationToMenu}>
                        <AntDesign name="left" size={24} color="black" style={styles.iconMenu}/> 
                    </Pressable>    
                )}            
            </View>
           
           <Image source={require('../assets/logo-pages.png')} style={{width: 200, height: 40, marginTop: 5}} />   
           
            <View>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Icon name="log-out" size={24} color="black" style={styles.iconLogout}/>
                </Pressable>        
            </View> 

             <Modal
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Deseja realmente deslogar?</Text>
                    <View style={styles.modalbtn}>
                        <Pressable
                            style={[styles.button, styles.buttonCancel]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Não</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleNavigationToLogin}
                            >
                            <Text style={styles.textStyle}>Sim</Text>
                        </Pressable>
                    </View>                    
                </View>
                </View>
            </Modal> 
        </View>  
    );      
}   

const styles = StyleSheet.create({    
    header:{
        // paddingTop: 20,
        backgroundColor:'#ddd',
        height: 75,    
        flexDirection:'row',        
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#D3D3D3',
        borderBottomWidth: 0,
    },
    iconMenu: {
        marginLeft: 20,
        marginRight: 20
    },
    iconLogout:{
        marginLeft: 20,
        marginRight: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        elevation: 5,
    },
    button: {
        borderRadius: 10,
        padding: 15,
        width: '30%',
        alignItems:'center',
    },
    buttonCancel: {
        backgroundColor: "#fff",
    },
    buttonClose: {
        elevation: 1,
        backgroundColor: "#aaa",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        fontWeight: "bold",
        fontSize:20
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalbtn:{
        flexDirection:'row',        
        justifyContent: 'space-around',
        alignItems: 'center',
    }
  
});
export default HeaderBar;