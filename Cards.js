import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Alert, Image} from 'react-native';

export default class Cards extends React.Component {
    constructor(props) {
        super(props);
        //randomize array
        this.state = {
            card1: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card2: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card3: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
            card4: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card5: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card6: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
            card7: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card8: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card9: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
            card10: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card11: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card12: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
             cards: [
                {uri: 'https://wallpapercave.com/wp/wp2230816.jpg'},
                {uri: 'https://wallpapercave.com/wp/wp2230816.jpg'},
                
                {uri: 'https://i.pinimg.com/originals/37/53/83/3753832b8b63527f07d98b29ddc1973a.jpg'},
                {uri: 'https://i.pinimg.com/originals/37/53/83/3753832b8b63527f07d98b29ddc1973a.jpg'},
            
                {uri: 'https://images.alphacoders.com/212/thumb-1920-212483.jpg'},
                {uri: 'https://images.alphacoders.com/212/thumb-1920-212483.jpg'},

                {uri: 'https://fsa.zobj.net/crop.php?r=IN1VSZk--L2PM6g5_zOUIzC6HEDG3E89LmFjVd6Pv1rHT1NMjkkj8A_7wqh-bRgwxAw6g_lCnEse1gWgqGTbkDOsRy_aMbZcNHxT2kONZgRDSGq7IgFfYL3y-wH_JGCB3IbUEl-RLi2HMbYg'},
                {uri: 'https://fsa.zobj.net/crop.php?r=IN1VSZk--L2PM6g5_zOUIzC6HEDG3E89LmFjVd6Pv1rHT1NMjkkj8A_7wqh-bRgwxAw6g_lCnEse1gWgqGTbkDOsRy_aMbZcNHxT2kONZgRDSGq7IgFfYL3y-wH_JGCB3IbUEl-RLi2HMbYg'},
    
                {uri: 'http://getwallpapers.com/wallpaper/full/5/8/0/11420.jpg'},
                {uri: 'http://getwallpapers.com/wallpaper/full/5/8/0/11420.jpg'},

                {uri: 'https://wallpapercave.com/wp/wp2261969.jpg'},
                {uri: 'https://wallpapercave.com/wp/wp2261969.jpg'}
            ], 

        cardsPressed: [],
        recentCards: [],
        PlayerOneScore: 0,
        PlayerTwoScore: 0,
        playerTurn: 1,
        testNum: 10
        
        }
    }

    componentDidMount(){
        Alert.alert('Lets Play!');
        this.shuffle(this.state.cards)
    }

    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        this.setState({
            cards: array
        })
    }

    isGameOver = () => {
        var gameOverMessage
        var testNum = 0
            if(this.state.card1.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card2.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card3.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card4.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card5.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card6.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card7.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card8.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card9.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card10.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card11.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}
            if(this.state.card12.uri ===  'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){testNum++}

        if(
             testNum === 1
        ){ 
            Alert.alert( (this.state.PlayerOneScore===this.state.PlayerTwoScore) ? 'Its a Tie' : (this.state.PlayerOneScore>this.state.PlayerTwoScore) ? 'Player 1 Wins!' : 'Player 2 Wins!',
            '',
            [
                {text: 'Play Again', onPress: () => {
                    this.setState({
                        card1: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card2: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card3: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
                        card4: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card5: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card6: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
                        card7: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card8: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card9: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
                        card10: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card11: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}, card12: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'},
                        PlayerOneScore: 0,
                        PlayerTwoScore: 0
                    });
                    this.shuffle(this.state.cards);
                    Alert.alert('Winner goes first')
                }},
            ]) 
        }else{}
    }

    match = (prevCard, thisCard) => {
        if(this.state.cardsPressed.length % 2 == 0 && this.state.cardsPressed.length != 0){
            if (prevCard.uri === thisCard.uri) { 
                this.state.playerTurn === 1 ? this.state.PlayerOneScore++ : this.state.PlayerTwoScore++;
                this.isGameOver();
                Alert.alert('Match!');
            }else{ 
                if (this.state.playerTurn === 1) {this.state.playerTurn++} else{this.state.playerTurn--}
                setTimeout(() => {
                    Alert.alert("Not a Match",
                    '',
                    [
                      {text: 'Player '+this.state.playerTurn+"'s turn", onPress: () => {
                            switch(this.state.recentCards[this.state.recentCards.length-2]) {
                                case 'card1':
                                    this.setState({
                                        card1: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card2':
                                    this.setState({
                                        card2: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card3':
                                    this.setState({
                                        card3: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card4':
                                    this.setState({
                                        card4: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card5':
                                    this.setState({
                                        card5: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card6':
                                    this.setState({
                                        card6: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;     
                                case 'card7':
                                    this.setState({
                                        card7: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card8':
                                    this.setState({
                                        card8: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card9':
                                    this.setState({
                                        card9: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    }) 
                                break;
                                case 'card10':
                                    this.setState({
                                        card10: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card11':
                                    this.setState({
                                        card11: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card12':
                                    this.setState({
                                        card12: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                            };
                            switch(this.state.recentCards[this.state.recentCards.length-1]) {
                                case 'card1':
                                    this.setState({
                                        card1: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card2':
                                    this.setState({
                                        card2: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card3':
                                    this.setState({
                                        card3: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card4':
                                    this.setState({
                                        card4: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card5':
                                    this.setState({
                                        card5: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card6':
                                    this.setState({
                                        card6: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;     
                                case 'card7':
                                    this.setState({
                                        card7: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card8':
                                    this.setState({
                                        card8: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card9':
                                    this.setState({
                                        card9: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    }) 
                                break;
                                case 'card10':
                                    this.setState({
                                        card10: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card11':
                                    this.setState({
                                        card11: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                                break;
                                case 'card12':
                                    this.setState({
                                        card12: {uri: 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'}
                                    })
                            }
                      }},
                    ])
                }, 10) 
            }    
        }
    }

    tap = (card, cardSrc) => {
        if(cardSrc.uri != 'https://images5.alphacoders.com/508/thumb-1920-508247.jpg'){return null}
        this.state.recentCards.push(card)
        switch(card) {
            case 'card1':
                this.setState({
                    card1: this.state.cards[0]
                })
                this.state.cardsPressed.push(this.state.cards[0]);
              break;
            case 'card2':
                this.setState({
                    card2: this.state.cards[1]
                })
                this.state.cardsPressed.push(this.state.cards[1]);
              break;
              case 'card3':
                this.setState({
                    card3: this.state.cards[2]
                })
                this.state.cardsPressed.push(this.state.cards[2]);
              break;
            case 'card4':
                this.setState({
                    card4: this.state.cards[3]
                })
                this.state.cardsPressed.push(this.state.cards[3]);
              break;
              case 'card5':
                this.setState({
                    card5: this.state.cards[4]
                })
                this.state.cardsPressed.push(this.state.cards[4]);
              break;
            case 'card6':
                this.setState({
                    card6: this.state.cards[5]
                })
                this.state.cardsPressed.push(this.state.cards[5]);
              break;     
            case 'card7':
                this.setState({
                    card7: this.state.cards[6]
                })
                this.state.cardsPressed.push(this.state.cards[6]);
            break;
            case 'card8':
                this.setState({
                    card8: this.state.cards[7]
                })
                this.state.cardsPressed.push(this.state.cards[7]);
              break;
            case 'card9':
                this.setState({
                    card9: this.state.cards[8]
                })
                this.state.cardsPressed.push(this.state.cards[8]);
              break;
            case 'card10':
                this.setState({
                    card10: this.state.cards[9]
                })
                this.state.cardsPressed.push(this.state.cards[9]);
              break;
            case 'card11':
                this.setState({
                    card11: this.state.cards[10]
                })
                this.state.cardsPressed.push(this.state.cards[10]);
              break;
            case 'card12':
                this.setState({
                    card12: this.state.cards[11]
                })
                this.state.cardsPressed.push(this.state.cards[11]);
              break;                                      
            default:
              // code block
          }
          this.match(this.state.cardsPressed[this.state.cardsPressed.length - 2], this.state.cardsPressed[this.state.cardsPressed.length - 1])
    }


    render() {
      return (
        <View style={styles.container}>
            <Text style={styles.title}>Matching Cards</Text>               
            <View style={styles.scoreBoard}>
                <Text style={styles.scores}>Player 1 Matches: {this.state.PlayerOneScore}</Text>
                <Text style={styles.scores}>Player 2 Matches: {this.state.PlayerTwoScore}</Text>
            </View>

            <ScrollView>
                <View style={styles.tableWrap}>
                    <View style={styles.tableRow}>
                        <TouchableOpacity onPress={() => this.tap('card1', this.state.card1)}><Image style={styles.card} source={this.state.card1}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card2', this.state.card2)}><Image style={styles.card} source={this.state.card2}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card3', this.state.card3)}><Image style={styles.card} source={this.state.card3}/></TouchableOpacity>
                    </View>
                    <View style={styles.tableRow}>
                        <TouchableOpacity onPress={() => this.tap('card4', this.state.card4)}><Image style={styles.card} source={this.state.card4}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card5', this.state.card5)}><Image style={styles.card} source={this.state.card5}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card6', this.state.card6)}><Image style={styles.card} source={this.state.card6}/></TouchableOpacity>
                    </View>
                    <View style={styles.tableRow}>
                        <TouchableOpacity onPress={() => this.tap('card7', this.state.card7)}><Image style={styles.card} source={this.state.card7}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card8', this.state.card8)}><Image style={styles.card} source={this.state.card8}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card9', this.state.card9)}><Image style={styles.card} source={this.state.card9}/></TouchableOpacity>
                    </View>
                    <View style={styles.tableRow}>
                        <TouchableOpacity onPress={() => this.tap('card10', this.state.card10)}><Image style={styles.card} source={this.state.card10}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card11', this.state.card11)}><Image style={styles.card} source={this.state.card11}/></TouchableOpacity>
                        <TouchableOpacity onPress={() => this.tap('card12', this.state.card12)}><Image style={styles.card} source={this.state.card12}/></TouchableOpacity>
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
        },
        scoreBoard: {
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 40,
            width: '100%',
            borderRadius: 10,
            overflow: 'hidden'
          },
          scores: {
            fontSize: 18,
            borderWidth: 1,
            borderRadius: 10,
            backgroundColor: 'lightgray',
            padding: 5,
            fontWeight: 'bold',
            overflow: 'hidden'
          }
})