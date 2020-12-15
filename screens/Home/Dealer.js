import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { Form, Input, Label, Item } from 'native-base';

function Dealer({ navigation }) {

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const loginsubmit = () => {
        axios({
            method: 'POST',
            url: "http://www.softsauda.com/userright/appuserlogin",
            data: {
                'usrnm': userName,
                'usrpwd': password
            }
        })
            .then(respone => {
                props.navigation.navigate('Company', { data: respone.data })
            })

    }
    return (
        <View style={styles.container} >
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
            <Form style={styles.form}>
                <Text style={{ fontSize: 30, fontWeight: "800" }}>Deal Admin</Text>





            </Form>






        </View>
    )
}


export default Dealer

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: '40%',
        height: "30%",
        top: -10,
        left: 120


    },

    form: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        top: -80,
        margin: 25
    },
    container: {
        flex: 1,
        flexDirection: "column",
        borderWidth: 2,
        marginHorizontal: 25
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        top: 30,
        left: 110,
        backgroundColor: "lightgray",
        padding: 40,
        borderRadius: 10
    }
})
