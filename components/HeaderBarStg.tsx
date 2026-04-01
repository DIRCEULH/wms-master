import React, { useState } from 'react';  
import {View, StyleSheet, Image,Pressable,Modal, Text} from 'react-native';  
import {Feather as Icon} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    PalletReceivement: undefined;
    PalletNational: undefined;
    PalletAddress: undefined;
    QueryAddressFreedom: undefined;
    QueryAddressProducts: undefined;
    QueryProdutcsAddress: undefined;
    PalletReprint: undefined;
    AddressPrint: undefined;
    Login:undefined;

};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = { navigation: ProfileScreenNavigationProp; };

const HeaderBar = ({navigation}: Props) => {    

    //const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    // function handleNavigationToMenu(){
    //     navigation.navigate('Index');
    // }

    function handleNavigationToLogin(){
        navigation.navigate('Login');
    }

    return (  
        <View style={styles.header}> 
            <View style={styles.iconMenu}>           
            </View>
           
           <Image 
                source={require('../assets/logo-pages.png')}               
                style={styles.logo}
            />   
           
            <View>
                <Pressable onPress={() => handleNavigationToLogin()}>
                    <Icon name="log-out" size={24} color="black" style={styles.iconLogout}/>
                </Pressable>        
                
            </View>

             {/* <Modal
                animationType="slide"
                transparent={true}
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
            </Modal> */}
        </View>  
    );      
}   

const styles = StyleSheet.create({    
    header:{
        backgroundColor:'#9e9e9e',
        height:100 ,    
        flexDirection:'row',        
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 2,
        borderColor: '#D3D3D3',
        borderBottomWidth: 3,
    },
    iconMenu: {
        marginLeft: 20,
        marginRight: 40
    },
    logo:{
        marginTop:10,
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
        elevation: 1,
    },
    buttonCancel: {
        backgroundColor: "#aaa",
    },
    buttonClose: {
        backgroundColor: "#fff",
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