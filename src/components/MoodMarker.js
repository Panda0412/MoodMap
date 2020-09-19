import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Marker} from 'react-native-maps';

const styles = StyleSheet.create({
  marker: {
    backgroundColor: '#fff',

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
  const radius = 20 * Math.sqrt(props.count);
  return (
    <Marker {...props}>
      <View
        style={{
          ...styles.marker,
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
        }}>
        <Text
          style={{
            ...styles.text,
            fontSize: radius,
          }}>
          {props.moodEmoji}
        </Text>
      </View>
    </Marker>
  );
}

MoodMarker.defaultProps = {
  count: 1,
};
