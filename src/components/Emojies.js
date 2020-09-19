import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Circle(props) {
  return (
    <View
      style={{
        width: 32,
        height: 32,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.14)',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: '900',
          fontSize: 18,
          lineHeight: 20,
          textAlign: 'center',
          letterSpacing: 0.326451,
          color: '#000',
        }}>
        {props.emoji}
      </Text>
    </View>
  );
}

const emojiesList = [
  '🥳',
  '😁',
  '😊',
  '😌',
  '😔',
  '😢',
  '😭',
  '😴',
  '😷',
  '😳',
  '😡',
];

export default function Emojies() {
  return (
    <View style={styles.topicsList}>
      {emojiesList.map((e) => {
        return (
          <View key={e} style={styles.topic}>
            <Circle emoji={e} />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  topicsList: {
    width: 408,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  topic: {
    width: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
