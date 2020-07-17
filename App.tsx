import * as React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps' ;
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>안녕하세요. 위치 목록 관리 앱입니다.
      </Text>
      <Button
        title='지도를 보려면 클릭하세요'
        onPress={()=>navigation.navigate('Map')}
      />
    </View>
  );
}

function MapScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> 죄송합니다. 지도 API를 못땄습니다. 더 배워오겠습니다. </Text>
      
    </View>
  );
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
