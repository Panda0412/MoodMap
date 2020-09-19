import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native';

export default function Topics({navigation}) {
  return (
    <View style={styles.topicsList}>
      <View style={styles.topic}>
        <Image source={require('../topics/music.png')} />
        <Text style={styles.topicName}>Музыка</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/movies.png')} />
        <Text style={styles.topicName}>Фильмы</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/autumn.png')} />
        <Text style={styles.topicName}>Осень</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/work.png')} />
        <Text style={styles.topicName}>Работа</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/quarantine.png')} />
        <Text style={styles.topicName}>Карантин</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/IT.png')} />
        <Text style={styles.topicName}>IT</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/cars.png')} />
        <Text style={styles.topicName}>Авто</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/games.png')} />
        <Text style={styles.topicName}>Игры</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/art.png')} />
        <Text style={styles.topicName}>Искусство</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/humor.png')} />
        <Text style={styles.topicName}>Юмор</Text>
      </View>
      <View style={styles.topic}>
        <Image source={require('../topics/photos.png')} />
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
