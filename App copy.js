import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Cadastro, Home } from './screens';


import Login from './components/login/login';
import Cadastro from './components/cadastro/cadastro';
import Home from './components/home/home';
import Addatividade from './components/atividade/Addatividade';
import Feed from './components/feed/feed';
import Perfil from './components/perfil/perfil';
import Edit from './components/perfil/editperfil';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Addatividade" component={Addatividade} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;