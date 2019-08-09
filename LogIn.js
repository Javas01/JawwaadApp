import React from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default class LogIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            usertext: 'username',
            passtext: 'password'
        }
    }
    onPress = (user, pass) => {
        Alert.alert('TeeHee '+user+' '+pass+'!')
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Log In</Text>  
                    <View style={styles.input}>
                        <TextInput
                            style={styles.text}
                            onChangeText={(usertext) => this.setState({usertext})}
                            value={this.state.usertext}
                        />
                        <TextInput
                            style={styles.text}
                            secureTextEntry={true}
                            onChangeText={(passtext) => this.setState({passtext})}
                            value={this.state.passtext}
                        />
                        <Button
                            style={styles.button}
                            onPress={() => this.onPress(this.state.usertext, this.state.passtext)}
                            title="Log In"
                            color="black"
                        />
                    </View>    
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'lightgreen'
    },
    button: {
        marginTop: 15
    },
    input: {
        marginTop: 300
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        height: 30,
        width: 160,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 7
    },
    title: {
        color: 'lightgray',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 35,
        paddingBottom: 15,
        width: '100%',
        backgroundColor: 'green',
    },
})