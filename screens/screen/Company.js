import React from 'react'
import { StyleSheet, Text, View,Button} from 'react-native';
import { DataTable} from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';




function Company(props) {

    const { data } = (props.route.params)

    const divisionhandler = (companycode) => { 
        props.navigation.navigate('division', { companyCode: companycode })
    }

    return (
        <ScrollView>
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>Company</DataTable.Title>
                <DataTable.Title >Start Dtae</DataTable.Title>
                <DataTable.Title >End Date</DataTable.Title>
                <DataTable.Title >Enter</DataTable.Title>
            </DataTable.Header>


      
                <DataTable.Row>
                <DataTable.Cell>{data.company_name}</DataTable.Cell>
                <DataTable.Cell >159</DataTable.Cell>
                <DataTable.Cell >159</DataTable.Cell>
                    <DataTable.Cell ><Button onPress={()=>divisionhandler(data.co_code)} title="Click"/></DataTable.Cell>
                </DataTable.Row>

           

            </DataTable>
            <View>
                <Text></Text>
            </View>
          
        </ScrollView>
    )
}


export default Company


