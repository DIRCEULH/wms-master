import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert, Text,ScrollView,Pressable,KeyboardAvoidingView } from 'react-native';  
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect} from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { StackNavigationProp } from '@react-navigation/stack';


type RootStackParamList = {
    Login:undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = { navigation: ProfileScreenNavigationProp; };

  
const Settings = ({ navigation }: Props) => { 

    const serverData = AsyncStorage.getItem('database')
    const [databaseConnected, setServer] = useState('')
   
    const handleSavePress = async (server: string) => {
        try {
            await AsyncStorage.setItem('database', server)
          
            Alert.alert('Sucesso', 'Base atualizada para ' + server);
            navigation.navigate("Login");
        } catch (_err) {
            Alert.alert('Erro', 'Erro ao inserir as informações');
        }
    }; 

    function handleNavigationToLogin(){
        navigation.navigate('Login');
    }

    const setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')

        if (serverData == 'producao') setServer('Produção');
        else setServer('Homologação');
    }

    useFocusEffect(() => {
        setDataBase();
    });

    return(
        <View style={styles.container}>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
                <Pressable onPress={handleNavigationToLogin}>
                    <AntDesign name="left" size={24} color="black" style={styles.iconMenu}/>
                </Pressable>   
            </View>
            <ScrollView style={styles.form}>
                <View style={styles.card}>
                    <View style={styles.cardHeader}>
                        <Text style={styles.textHeader}> Configurações </Text>
                    </View>                   
                    <View style={styles.cardBody}>
                        <Text style={{fontSize: 20}}>
                            <FontAwesome name="server" size={24} color="black" style={styles.iconinput}/>
                            Clique para se conectar a base
                        </Text>
                        <Text style={styles.textVersion}>Atualmente conectado em {databaseConnected}</Text>
                        {/* <View style={styles.input}>    */}
                        <Pressable onPress={() => handleSavePress('producao')} style={styles.btnbase}>
                            <Text style={styles.fontEnter}>Produção</Text>
                        </Pressable> 

                        <Pressable onPress={() => handleSavePress('homologacao')} style={styles.btnbase}>
                            <Text style={styles.fontEnter}>Homologação</Text>
                        </Pressable> 
                        {/* </View> */}
                        <View style={styles.cardBody}>
                            <Text style={{fontSize: 15, marginTop: 20, textAlign: 'center'}}>Caso nenhuma base for selecionada ou não idenfiticada, será conectado na base de produção. Em todas as telas será informado qual base está conectando.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    iconMenu: {
        marginLeft: 20,
        marginRight: 20
    },
    container: {
      flex:1,
      paddingTop: 20,
      flexDirection:'column',      
    },
    form:{
        marginTop:30
    },
    card:{
        alignItems:'center'
    },
    cardHeader:{
        alignItems:'center',
        marginBottom:20
    },
    cardBody:{
        alignItems:'center',
        width: '90%',
    },
    input:{
        padding:15,
        borderWidth:1,
        marginBottom:10,
        borderRadius:3,
        flexDirection:'row',
    },
    fontEnter:{
        fontSize:20,
    },
    btnbase:{
        alignItems:'center',
        backgroundColor: '#DCDCDC',
        width:300,
        padding:10,
        marginTop:20,
        borderRadius:20,
        borderWidth:2
    },
    iconinput: {
        marginRight: 10
    },
    textHeader:{
        fontSize:25
    },
    btnGravar:{
        alignItems:'center',
        width: '90%',
        padding:10,
        marginTop:20,
        borderRadius:5,
        backgroundColor: '#aaa'
    },
    labelGravar:{
        fontSize:20
    },
    textVersion:{
        marginTop:20,
        alignItems: 'center'
    }
});

export default Settings;