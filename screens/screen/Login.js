import React, { useState } from 'react'
import { ImageBackground, View, StyleSheet, Text, KeyboardAvoidingView, Image, AsyncStorage } from 'react-native'
import { Form, Input, Label, Item, Button } from 'native-base';
import axios from 'axios';
function Login(props) {

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
        <View style={styles.container}>
            <Image source={require("../../assets/login.png")} style={styles.image} resizeMode="contain" />
            <Form style={styles.form}>
                <Text style={{ fontSize: 30, fontWeight: "800" }}>Login</Text>

                <Item floatingLabel>
                    <Label>Username</Label>
                    <Input value={userName} onChangeText={(username) => setUserName(username)}></Input>
                </Item>

                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input value={password} onChangeText={(password) => setPassword(password)}></Input>
                </Item>
                <Button style={styles.button} onPress={() => loginsubmit()}><Text>Login</Text></Button>
                <Text style={{ top: 50 }}>Forgot Password ?</Text>

            </Form>


        </View>
    )
}

export default Login


const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: '40%',
        height: "30%",
        top: -35,
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
        flexDirection: "column"
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