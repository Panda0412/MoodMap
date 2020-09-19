import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StatusBar, StyleSheet} from 'react-native';
import markers from './markers';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
];

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
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.moodName}
            description={marker.moodEmoji}
          />
        ))}
      </MapView>
        }}
      />
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
