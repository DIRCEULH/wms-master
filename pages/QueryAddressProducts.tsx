import React, { useState,useEffect}from 'react';
import {View, Text, ScrollView, TextInput, Pressable, FlatList, Alert} from 'react-native';  
import {Feather as Icon, FontAwesome} from '@expo/vector-icons';
import  HeaderBarPages from '../components/HeaderBarPages';
import {api} from '../services/api';
import CommonStyles from './CommonStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loading from '../components/Loading';

interface Item {
  
    lista: {
        codEnd: string;
        codPlt: number;
        codPro: number,
        datEnt: string,
        seqPlt: number
    },
    msgRet: string;
}[]

//tem essas colchetes pq é um array de objetos

const QueryAddressProducts = () => {
    const [codEnd, setCodEnd] = useState('')
    const [numDum, setNumDum] = useState('')
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);
  



    // DEFINIÇÃO DA BASE DE DADOS
    const [connection, setConnection] = useState('')
    let setDataBase = async () => {
        const serverData = await AsyncStorage.getItem('database')
        if (serverData) setConnection(serverData)
    }
    useEffect(() => { setDataBase(); }, []);

    const handleSignInPress = async () => {
        setIsLoading(true);

        setItems([
            {
                
                lista: {
                    codEnd: "",
                    codPlt: 0,
                    codPro: 0,
                    datEnt: '',
                    seqPlt: 0
                },
                msgRet: ''
            }
        ]);
       
        const userData = await AsyncStorage.getItem('user')
        const passwordData = await AsyncStorage.getItem('password')



        if (codEnd.length === 0 && numDum.length === 0) {
            Alert.alert('Dados não Informados', ' Verificar dados informados'); 
        } else {
                   
                    const retorno = await api(connection).post('prodcts-addressed', {
                        token_user: 'qMW3xgGUYwW8FeuG',
                        token_password: 'm2PzXWepAfHgupeT',
                        numDum: numDum,
                        codEnd: codEnd,
                        user: userData,
                        password: passwordData
                    });


                    if (retorno.data.payload.retorno.msgRet == 'Processado com Sucesso!') {
                        setIsLoading(false);
                           
                     
                        setItems(retorno.data.payload.retorno.lista);
                    
                    } else {
                        setIsLoading(false);
                        setItems([
                            {
                                
                                lista: {
                                    codEnd: "",
                                    codPlt: 0,
                                    codPro: 0,
                                    datEnt: '',
                                    seqPlt: 0
                                },
                                msgRet: ''
                            }
                        ]);
                        alert(retorno.data.payload.retorno.msgRet);
                    }

                }  
           
    }

    

    return (
        <View style={CommonStyles.container}>
            <View>
                <HeaderBarPages></HeaderBarPages>       
            </View>
            
            <View>
        
            <ScrollView style={CommonStyles.form}>
                    <View style={CommonStyles.card}>
                        {/* <View style={CommonStyles.cardHeader}>
                            <Text style={CommonStyles.textHeader}> Produtos/Endereços </Text>
                        </View> */}
                        <View style={CommonStyles.cardBody}>
                            <View style={CommonStyles.input}>
                                <FontAwesome name="th" size={24} color="black" style={CommonStyles.iconinput} />
                                <TextInput
                                    placeholder='SKU / DUM:'
                                    onChangeText={value => setNumDum(value)}
                                    autoFocus={true}
                                    value={numDum}
                                    style={CommonStyles.inputbox}
                                    placeholderTextColor='black'
                                />
                            </View>
                            <View style={CommonStyles.input}>
                                <FontAwesome name="th" size={24} color="black" style={CommonStyles.iconinput} />
                                <TextInput
                                    placeholder='Endereço:'
                                    onChangeText={value => setCodEnd(value)}
                                    value={codEnd}
                                    style={CommonStyles.inputbox}
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                        <View>
                            <Pressable style={CommonStyles.btnConsultar} onPress={handleSignInPress} >
                                <Text style={CommonStyles.labelGravar}>{isLoading ? <Loading /> : <Icon name="search" size={25} color="black" style={CommonStyles.iconinput}> Consultar </Icon>} </Text>
                            </Pressable>
                        </View>
                    </View>
              
                    <View style={CommonStyles.tableconsulta}>
                        <Text ></Text>
                    </View>
                
                    </ScrollView>
              
                {/*  <SafeAreaView style={{alignItems:'center'}}>
                        <View style={styles.table}>
                            <Text style={styles.titletable}>Endereço</Text>
                            <Text style={styles.titletable}>Entrada</Text>
                        </View>  */}
                {/* </SafeAreaView> */}
            </View>
   
            <ScrollView style={CommonStyles.form}>
            
                <FlatList 
                         data={items.length > 0 ? items: [items]}
                        keyExtractor={(item,index) => index.toString()}
                        renderItem={({item, index}) => (    
                        <View style={CommonStyles.item} >
                            {item.codPlt === 1  ? <Text style={CommonStyles.titletableTop}>{ item.codEnd }</Text>  :
                            <Text style={CommonStyles.titletableButtom}>{ item.codEnd }</Text> }
                        </View>
                                      
                        )}  
                />
          
          </ScrollView>                          
            </View>
        )

   


}



 export default QueryAddressProducts;