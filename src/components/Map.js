import React from 'react';
import MapView from 'react-native-maps';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Topics from './Topics';
import markers from './markers';
import MoodMarker from './MoodMarker';
import mapStyle from './mapStyle';

export default function Map({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <MapView
        style={styles.map}
        customMapStyle={mapStyle}
        region={{
          latitude: 59.93959,
          longitude: 30.315019,
          latitudeDelta: 0.1844,
          longitudeDelta: 0.0842,
        }}>
        {markers.map((marker, index) => (
          <MoodMarker key={index} {...marker} />
        ))}
      </MapView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 8,
          right: 12,
        }}
        onPress={() => navigation.navigate('News')}>
        <Image source={require('../icons/cross.png')} />
      </TouchableOpacity>
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
        <Text style={styles.title}>Темы</Text>
        <ScrollView
          horizontal={true}
          style={{maxHeight: 96, backgroundColor: '#fff'}}>
          <Topics />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 23,
    lineHeight: 28,
    letterSpacing: 0.2,
    color: '#818C99',
    backgroundColor: '#fff',
  },
});
