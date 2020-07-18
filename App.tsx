import React, {useState} from 'react' ;
import MapView, {Marker} from 'react-native-maps' ;
import * as location from 'expo-location' ;
import { Text, View, StyleSheet, Button, Alert } from 'react-native' ;
import { NavigationContainer } from '@react-navigation/native' ;
import { createStackNavigator } from '@react-navigation/stack' ;
import Styled from 'styled-components' ;


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

const MapRange = Styled.View`flex: 1;`;

interface MarkerLocation {
  location: {
    latitude: number;
    longitude: number;
  };
}
function MapScreen({navigation}) {
  const [location, setLocation] = useState<MarkerLocation>({
    latitude: 37.50959,
    longitude: 127.0551,
  });

  return (
    <MapRange>
      <MapView
      style={{flex: 1}}
      initialRegion={{
        latitude: 37.50959,
        longitude: 127.0551,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
        }}
      >
      <Marker draggable
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
        title="Marker"
        description="Place"
      />
      </MapView>
    </MapRange>
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
