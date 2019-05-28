import React from 'react';
import { Linking, Image, StyleSheet, Text, View } from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Screen</Text>               
            <Image style={styles.pic} source={require('./imageAssets/profilePic.jpeg')} />
            <Text style={styles.text}>This is my first React Native App</Text>
            <Text>Visit my <Text style={{color: 'blue'}}
                onPress={() => Linking.openURL('http://javas01.github.io/home.html')}>
                  Website
            </Text> to see my web version of this project</Text>
        </View>
      );
    }
}

const styles = StyleSheet.create ({
        container: {
            flex: 1,
            height: '100%',
            alignItems: 'center',
            backgroundColor: 'lightgreen'
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
        pic: {
            borderRadius: 25,
            marginTop: 25
        },
        text: {
            fontSize: 20,
            paddingTop: 10
        }
})