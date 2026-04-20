import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import HeaderBarPages from '../components/HeaderBarPages';
import { StackNavigationProp } from '@react-navigation/stack';
import { List } from 'react-native-paper';
import { } from '@react-navigation/stack';

type RootStackParamList = {
    PalletReceivement: undefined;
    PalletNational: undefined;
    PalletAddress: undefined;
    QueryAddressFreedom: undefined;
    QueryAddressProducts: undefined;
    QueryProdutcsAddress: undefined;
    PalletReprint: undefined;
    AddressPrint: undefined;

};

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = { navigation: ProfileScreenNavigationProp; };

function Index({ navigation }: Props) {

    function handleNavigationToPalletReceivement() {
        navigation.navigate('PalletReceivement');
    }

    function handleNavigationToPalletAddress() {
        navigation.navigate('PalletAddress');
    }

    function handleNavigationToFreeAddress() {
        navigation.navigate('QueryAddressFreedom');
    }

    function handleNavigationToQueryAddressProducts() {
        navigation.navigate('QueryAddressProducts');
    }

    function handleNavigationToQueryProdutcsAddress() {
        navigation.navigate('QueryProdutcsAddress');
    }

    function handleNavigationToPalletReprint() {
        navigation.navigate('PalletReprint');
    }

    function handleNavigationToAddressPrint() {
        navigation.navigate('AddressPrint');
    }

    return (
        <View style={styles.container}>
            <View>
            <HeaderBarPages></HeaderBarPages>
            </View>
            <ScrollView>
                <View style={styles.dropMenu}>
                    <List.Section>

                        {/* <List.Accordion */}
                        {/* title="RECEBIMENTO" */}
                        {/* titleStyle={styles.title} */}
                        {/* left={props => <List.Icon {...styles.title} icon="clipboard" />} */}
                        {/* style={styles.Menu}> */}
                        <List.Item  left={props => <List.Icon {...styles.title} icon="record" />} title="GRAVAR" style={styles.Menu} onPress={handleNavigationToPalletReceivement} />
                        {/* <List.Item left={props => <List.Icon {...styles.title} icon="forward" />} title="Gerar Pallet SGQ" style={styles.itemMenu} onPress={handleNavigationToPalletSgq} /> */}
                        {/* <List.Item left={props => <List.Icon {...styles.title} icon="forward" />} title="Distribuir SGQ para Picking" style={styles.itemMenu} onPress={handleNavigationToPickingSGQ} /> */}
                        {/* </List.Accordion> */}



                        {/* <List.Accordion */}
                        {/* title="MOVIMENTAÇÕES"                         */}
                        {/* titleStyle={styles.title} */}
                        {/* left={props => <List.Icon {...styles.title} icon="clipboard" />} */}
                        {/* style={styles.Menu}> */}
                        {/* <List.Item title="Gerar Pallet Recebimento" style={styles.itemMenu} onPress={handleNavigationToPalletReceivement} /> */}
                        {/* <List.Item title="Gerar Pallet Nacional" style={styles.itemMenu} onPress={handleNavigationToPalletProduced} /> */}
                        <List.Item left={props => <List.Icon {...styles.title} icon="cart" />} title="MOVIMENTAR" style={styles.Menu} onPress={handleNavigationToPalletAddress} />

                        {/* </List.Accordion> */}



                        {/* <List.Accordion */}
                        {/* title="CONSULTAS" */}
                        {/* titleStyle={styles.title} */}
                        {/* left={props => <List.Icon {...styles.title} icon="table-search" />} */}
                        {/* style={styles.Menu}> */}
                        <List.Item left={props => <List.Icon {...styles.title} icon="table-search" />} title="CONSULTAR" style={styles.Menu} onPress={handleNavigationToQueryAddressProducts} />
                        {/* <List.Item left={props => <List.Icon {...styles.title} icon="forward" />} title="Endereços por Produto" style={styles.itemMenu} onPress={handleNavigationToQueryProdutcsAddress} /> */}
                        {/* <List.Item left={props => <List.Icon {...styles.title} icon="forward" />} title="Endereços por Situação" style={styles.itemMenu} onPress={handleNavigationToFreeAddress} /> */}
                        {/* </List.Accordion> */}

                        {/* <List.Accordion */}
                        {/* title="REIMPRESSÃO" */}
                        {/* titleStyle={styles.title} */}
                        {/* left={props => <List.Icon {...styles.title} icon="tag" />} */}
                        {/* style={styles.Menu}> */}
                        {/* <List.Item left={props => <List.Icon {...styles.title} icon="forward" />} title="Reimpressão Pallet"     style={styles.itemMenu} onPress={handleNavigationToPalletReprint} /> */}
                        <List.Item left={props => <List.Icon {...styles.title} icon="printer" />} title="REIMPRIMIR" style={styles.Menu} onPress={handleNavigationToAddressPrint} />

                        {/* </List.Accordion> */}
                    </List.Section>
                </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    base: {
        marginTop: 5
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFBFE',
        borderTopWidth: 5
    },
    dropMenu: {
        paddingTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    },
    title: {
        color: '#000'
    },
    Menu: {
        borderRadius: 10,
        backgroundColor: '#ccc',
        marginBottom: 10,
        width: 300,
        fontSize: 5,
        padding: 5,
        textAlign: 'center',
        alignItems: 'center'
    },
    itemMenu: {
        borderRadius: 10,
        backgroundColor: '#ddd',
        marginBottom: 5,
        fontSize: 4,
        width: '100%',
        borderWidth: 1,
        borderColor: '#aaa'
    }
});

export default Index;