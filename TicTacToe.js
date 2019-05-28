import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Alert} from 'react-native';

export default class TicTacToe extends React.Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
     gameData: [
      ['','',''],
      ['','',''],
      ['','','']
      ],
      currPlayer: 'X',
      scoreX: 0,
      scoreO: 0
    }
    
  }

  componentDidMount(){
    Alert.alert(
      'Have Fun!'
    )
    isGameOver = () => {
      var arr = this.state.gameData.slice();
      var winner = this.state.currPlayer
      if(
        arr[0][0] === arr[0][1] && arr[0][0] === arr[0][2] && arr[0][0] ||
        arr[1][0] === arr[1][1] && arr[1][0] === arr[1][2] && arr[1][0] ||
        arr[2][0] === arr[2][1] && arr[2][0] === arr[2][2] && arr[2][0] ||
        arr[0][0] === arr[1][0] && arr[0][0] === arr[2][0] && arr[0][0] ||
        arr[0][1] === arr[1][1] && arr[0][1] === arr[2][1] && arr[0][1] ||
        arr[0][2] === arr[1][2] && arr[0][2] === arr[2][2] && arr[0][2] ||
        arr[0][0] === arr[1][1] && arr[0][0] === arr[2][2] && arr[0][0] ||
        arr[2][0] === arr[1][1] && arr[2][0] === arr[0][2] && arr[2][0] 
        )
      {
        Alert.alert("Player "+ this.state.currPlayer +" Won!",
        '',
        [
          {text: 'Play Again', onPress: () => {
            this.setState({
              gameData:[
             ['','',''],
             ['','',''],
             ['','','']
             ],
             currPlayer: winner
              })
            Alert.alert('Winner goes first')  
          }},
        ])
       
      let scoreX = this.state.scoreX;
      let scoreO = this.state.scoreO;
      if(this.state.currPlayer === 'X'){
         this.setState({scoreX: scoreX+1})
      }else{   
        this.setState({scoreO: scoreO+1})
      }
    }else if(
      arr[0][0] != '' && arr[0][1] != '' && arr[0][2] != '' && 
      arr[1][0] != '' && arr[1][1] != '' && arr[1][2] != '' && 
      arr[2][0] != '' && arr[2][1] != '' && arr[2][2] != '' 
    ){
      Alert.alert("Tie Game")
      this.setState({
        gameData:[
       ['','',''],
       ['','',''],
       ['','','']
       ], 
       currPlayer: "X"
      })
    }
    }
  }

  

  tap = (row, col) => {
    var turn = this.state.currPlayer
    var arr = this.state.gameData.slice();
    if(arr[row][col] != ''){return;}
    arr[row][col] = this.state.currPlayer
    this.setState({
      gameData : arr,  
    })
    if(turn === 'X'){turn = 'O'}
    else if(turn === 'O'){turn = 'X'}
    this.setState({currPlayer: turn })
    isGameOver()  
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>Tic - Tac - Toe</Text>

          <View style={styles.scoreBoard}>
              <Text style={styles.scores}>Player X Score: {this.state.scoreX}</Text>
              <Text style={styles.scores}>Player O Score: {this.state.scoreO}</Text>
          </View>

          <View style={styles.tableWrap}>
            <View style={styles.tableRow}>
                <TouchableOpacity onPress={() => this.tap(0,0)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[0][0]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(0,1)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[0][1]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(0,2)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[0][2]}</Text></TouchableOpacity>
            </View>
            <View style={styles.tableRow}>
                <TouchableOpacity onPress={() => this.tap(1,0)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[1][0]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(1,1)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[1][1]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(1,2)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[1][2]}</Text></TouchableOpacity>
            </View>
            <View style={styles.tableRow}>
                <TouchableOpacity onPress={() => this.tap(2,0)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[2][0]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(2,1)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[2][1]}</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => this.tap(2,2)} style={styles.tableData}><Text style={styles.text}>{this.state.gameData[2][2]}</Text></TouchableOpacity>
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  tableWrap: {
    alignItems: 'center',
    marginTop: 50
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
  tableData: {
    textAlign: 'center',
    color: '#333333',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 30,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableRow: {
    flexDirection: 'row'
  },
  text: {
      fontSize: 75,
      color: 'blue'
  },
  scoreBoard: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
    marginTop: 40

  },
  scores: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    padding: 5,
    fontWeight: 'bold',
  }
});
