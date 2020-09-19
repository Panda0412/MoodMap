import React from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';

function Circle(props) {
  return (
    <View
      style={{
        width: 64,
        height: 64,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.14)',
        borderRadius: 32,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontFamily: 'Roboto',
          fontWeight: '900',
          fontSize: 24,
          lineHeight: 28,
          textAlign: 'center',
          letterSpacing: 0.326451,
          color: '#000',
        }}>
        {props.emoji}
      </Text>
    </View>
  );
}

export default function Topics({navigation}) {
  return (
    <View style={styles.topicsList}>
      <View style={styles.topic}>
        <Circle emoji="🎧" />
        <Text style={styles.topicName}>Музыка</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🍿" />
        <Text style={styles.topicName}>Фильмы</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🍂" />
        <Text style={styles.topicName}>Осень</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="👔" />
        <Text style={styles.topicName}>Работа</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="😷" />
        <Text style={styles.topicName}>Карантин</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="💻" />
        <Text style={styles.topicName}>IT</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🚗" />
        <Text style={styles.topicName}>Авто</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🕹️" />
        <Text style={styles.topicName}>Игры</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🎨" />
        <Text style={styles.topicName}>Искусство</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="🎭" />
        <Text style={styles.topicName}>Юмор</Text>
      </View>
      <View style={styles.topic}>
        <Circle emoji="📷" />
        <Text style={styles.topicName}>Фотографии</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topicsList: {
    width: 888,
    // height: 96,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  topic: {
    width: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topicName: {
    fontFamily: 'Roboto',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: '#000',
  },
});
