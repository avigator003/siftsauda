import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { DataTable } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';


function Division(props) {

    const { companyCode } = props.route.params


    const divisionhandler = () => {
        props.navigation.navigate('Dealer')
    }
    return (
        <ScrollView>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Divison</DataTable.Title>
                    <DataTable.Title >Code</DataTable.Title>
                    <DataTable.Title >Link</DataTable.Title>
                </DataTable.Header>



                <DataTable.Row>
                    <DataTable.Cell>{companyCode}</DataTable.Cell>
                    <DataTable.Cell >159</DataTable.Cell>
                    <DataTable.Cell ><Button title="Enter" onPress={divisionhandler} /></DataTable.Cell>
                </DataTable.Row>



            </DataTable>
            <View>
                <Text></Text>
            </View>

        </ScrollView>
    )
}

export default Division
