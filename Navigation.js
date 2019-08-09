import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import TicTacToe from './TicTacToe'
import HomeScreen from './HomeScreen'
import Cards from './Cards'
import LogIn from './LogIn'


const TabNavigator = createBottomTabNavigator(
  {
  LogIn: LogIn,  
  Home: HomeScreen,
  TicTacToe: TicTacToe,
  Cards: Cards,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(TabNavigator);