import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  marker: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 40 / 2,

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 0.5,
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 24,
  },
});

export default function MoodMarker(props) {
  return (
    <Marker {...props}>
      <View style={styles.marker}>
        <Text style={styles.text}>{props.moodEmoji}</Text>
      </View>
    </Marker>
  );
}
