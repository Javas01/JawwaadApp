import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Alert, Image} from 'react-native';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        const cardBack = <Image style={{width: '100%', height: '100%', borderRadius: 25}} source={require('./cardBack.jpg')}/>
        this.state = {
            card1: cardBack, card2: cardBack, card3: cardBack,
            card4: cardBack, card5: cardBack, card6: cardBack,
            card7: cardBack, card8: cardBack, card9: cardBack,
            card10: cardBack, card11: cardBack, card12: cardBack
        }
    }

    componentDidMount(){
        Alert.alert('Lets Play!')
    }


    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Matching Cards</Text>               
        <ScrollView>
            <View style={styles.tableWrap}>
                <View style={styles.tableRow}>
                    <TouchableOpacity style={styles.card}>{this.state.card1}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card2}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card3}</TouchableOpacity>
                </View>
                <View style={styles.tableRow}>
                    <TouchableOpacity style={styles.card}>{this.state.card4}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card5}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card6}</TouchableOpacity>
                </View>
                <View style={styles.tableRow}>
                    <TouchableOpacity style={styles.card}>{this.state.card7}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card8}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card9}</TouchableOpacity>
                </View>
                <View style={styles.tableRow}>
                    <TouchableOpacity style={styles.card}>{this.state.card10}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card11}</TouchableOpacity>
                    <TouchableOpacity style={styles.card}>{this.state.card12}</TouchableOpacity>
                </View>
            </View>
        </ScrollView>

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
        tableWrap: {
            margin: 10
        },
        tableRow: {
            flexDirection: 'row'
        },
        card: {
            borderWidth: 1,
            borderColor: 'white',
            width: 100,
            height: 170,
            margin: 5,
            borderRadius: 25
        }
})