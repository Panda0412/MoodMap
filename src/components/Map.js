import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Emojies from './Emojies';
import Topics from './Topics';
import markers from './markers';
import MoodMarker from './MoodMarker';
import mapStyle from './mapStyle';
import ClusteredMapView from 'react-native-maps-super-cluster';

export default function Map({navigation}) {
  const map = useRef(null);
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <ClusteredMapView
        data={markers}
        ref={map}
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={{
          latitude: 59.93959,
          longitude: 30.315019,
          latitudeDelta: 0.1844,
          longitudeDelta: 0.0842,
        }}
        renderMarker={(data) => (
          <MoodMarker
            key={data.id || Math.random()}
            {...data}
            coordinate={data.location}
          />
        )}
        renderCluster={(cluster) => {
          const clusteringEngine = map.current.getClusteringEngine(),
            clusteredPoints = clusteringEngine.getLeaves(
              cluster.clusterId,
              100,
            );

          const pointsData = clusteredPoints.map((i) => i.properties.item);
          const moodNamesWithEmoji = pointsData.reduce((acc, val) => {
            acc[val.moodName] = val.moodEmoji;
            return acc;
          }, {});

          const moodsWithCount = pointsData.reduce((acc, val) => {
            if (acc[val.moodName] !== undefined) {
              acc[val.moodName]++;
            } else {
              acc[val.moodName] = 0;
            }
            return acc;
          }, {});

          const maxMood = Object.entries(moodsWithCount)
            .sort((a, b) => b[1] - a[1])
            .shift()
            .shift();

          return (
            <MoodMarker
              key={cluster.id}
              coordinate={cluster.coordinate}
              moodName={maxMood}
              moodEmoji={moodNamesWithEmoji[maxMood]}
            />
          );
        }}>
        {/*{markers.map((marker, index) => (*/}
        {/*  <MoodMarker key={index} {...marker} />*/}
        {/*))}*/}
      </ClusteredMapView>
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
        <View style={{backgroundColor: '#fff', paddingLeft: 8}}>
          <Text style={styles.title}>Эмоции</Text>
          <ScrollView horizontal={true} style={{maxHeight: 40}}>
            <Emojies />
          </ScrollView>
          <Text style={styles.title}>Темы</Text>
          <ScrollView horizontal={true} style={{maxHeight: 96}}>
            <Topics />
          </ScrollView>
        </View>
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
    marginTop: 12,
    marginBottom: 6,
    marginLeft: 8,
  },
});
