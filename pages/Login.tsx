import React,{useState, useEffect } from 'react'
import {Text, TextInput, View, Image, StyleSheet, Pressable,ScrollView,Alert } from 'react-native'
import {Feather as Icon} from '@expo/vector-icons';
import {api} from '../services/api';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


interface Params{
    token_user: string;
    token_password: string;
    usr_login: string;
    usr_password: string;
}

type RootStackParamList = {
    Index: undefined;
    Settings: undefined;
    Login: undefined;
  };


  const Login = ()=> {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    function handleNavigationToMenu(){
        navigation.navigate('Index');
    }
    const [usr_name, setUser] = useState('')
    const [usr_password, setPassword] = useState('')
    const [databaseConnected, setServer] = useState('')
    
    // DEFINIÇÃO DA BASE DE DADOS
    const handleSignInPress = async () => {
        const serverData = await AsyncStorage.getItem('database')
       
        if (serverData && serverData.length > 4) {

            if (usr_name.length === 0 || usr_password.length === 0) {
                Alert.alert('Dados Inválidos', 'Verificar dados informados'); 
            } else {

                try {
                    const response = await api(serverData).post('auth/login', {    
                        usr_name: usr_name,
                        usr_password: usr_password 
                    });

                    if(response.data.payload.user != undefined){ 
                        if  (response.data.payload.user == usr_name) {    
                            await AsyncStorage.setItem('user', usr_name)
                            await AsyncStorage.setItem('password', usr_password)
                            setUser('')
                            setPassword('')
                            navigation.navigate('Index');
                        } else {
                            alert(response.data.payload.user);                       
                        }
                    } else {
                        Alert.alert( 'Dados inválidos, verifique!!','usuário não definido.');
                    }
                } catch (_err) {
                    Alert.alert( 'Houve um problema com o login! ','Verifique suas credenciais!' );
                }
            }
        } else {
            Alert.alert('Configurações inválidas', 'Verificar com o setor de TI as configurações do aplicativo'); 
      }
    }; 

    const handleSettingsInPress = async () => {
        if (usr_name.length === 0 || usr_password.length === 0) {
            Alert.alert('Dados Inválidos', 'Informe usuário e senha de administrador'); 
        }else{
            if((usr_name === "admin") && (usr_password === "admin")){
                navigation.navigate('Settings');
            }else{
                Alert.alert('Erro de Acesso!','Usuário sem permissão de acesso');
            }     
        }          
    }

    const setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')

        if (serverData == 'producao') setServer('Produção');
        else setServer('Homologação');
    }

    useFocusEffect(() => {
        setDataBase();
    });

    let adminbutton;

    if (usr_name == 'admin') adminbutton = <Pressable onPress={handleSettingsInPress} style={styles.btnConfig}><Icon name="settings" color="black" size={30} /></Pressable>
    else adminbutton = <Text></Text>;

    return(
        <>
        <ScrollView style={styles.container}>
          <View>
              {adminbutton}
          </View> 
          <View style={{alignItems:'center',flexDirection: 'column', flex:1, marginTop:20}}>
            <View style={styles.form}>      
              <View style={{marginBottom: 20}}>
                  {/* <Text style={styles.logo}>WMS</Text> */}
                  <Image source={require('../assets/iconWMS.png')} style={{width: 100, height: 100, marginTop: 10}} />
              </View>
              <View style={styles.input} >
                  <Icon name="user" color="black" size={24} style={styles.iconInput}/>
                  <TextInput
                      placeholder="Usuario"
                      autoCapitalize="none"
                      onChangeText={value => setUser(value)}
                      autoCorrect={false} 
                      value={usr_name}
                      placeholderTextColor='black' 
                      style={{width: 200}}   
                  />
              </View>
              <View style={styles.input} >
                  <Icon name="lock" size={24} color="black" style={styles.iconInput}/>
                  <TextInput
                      placeholder="Senha" 
                      autoCapitalize="none"
                      onChangeText={value => setPassword(value)}                            
                      autoCorrect={false}  
                      value={usr_password}
                      secureTextEntry={true}
                      placeholderTextColor='black'
                      style={{width: 200}}  
                  />
              </View>            
            </View>
            <View >
              <Pressable onPress={handleSignInPress} style={styles.btnLogin}>
              <Icon name="arrow-right" color="black" style={styles.iconInput}>
                <Text style={styles.fontEnter}> Entrar</Text>
                </Icon>
              </Pressable> 
            </View>
          </View>           
        </ScrollView>   
        <View style={styles.version}>
            <Text style={styles.textVersion}>v.4.0.1 - {databaseConnected}</Text>
            <Text style={styles.textVersion}>TI Blumenau Iluminação.</Text>
        </View>      
      </>
    );
}

const styles = StyleSheet.create({
    base:{
        marginTop: 25,
    },
    logo:{
        fontSize: 40,
        marginBottom:30,
        borderWidth:2,
        padding: 15,
        backgroundColor:'#DCDCDC',
        borderRadius: 20,
        borderColor: '#ddd',
        elevation: 1,
    },
    fontEnter:{
        fontSize:20,
    },
    btnConfig:{
            alignItems:'flex-end',
            marginTop: 55,
            marginRight:35,
            

    },
    container: {
      flex:1,
      marginTop: -10,
      flexDirection:'column',
      top:1,
      backgroundColor:'#FFFBFE',
      
    },
    textBase: {
        marginTop: 10,
    },
    form: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems:'center'
    },
    input: {
        width: 230,
        padding:10,
        marginBottom:10,
        flexDirection:'row',
        backgroundColor:'#DCDCDC',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#ddd',
   
    },
    iconInput: {
        marginRight: 3,
        fontSize:22
    },
    btnLogin:{
        alignItems:'center',
        backgroundColor: '#DCDCDC',
        width:220,
        padding:10,
        marginTop:20,
        borderRadius:20,
        borderWidth:2
    },
    version:{      
        flexDirection:'column',
        alignItems:'center',
        height:5,     
        left: 0, 
        right: 0,
        bottom: 0,
        flex:0.1,
        paddingTop:10,
        marginBottom:0,
        backgroundColor:'#ddd',
    },
    textVersion:{
        alignItems: 'center'
    }
});

export default Login;