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

export default function News({navigation}) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.header}>
        <Image
          style={{marginRight: 3}}
          source={require('../icons/camera.png')}
        />
        <View style={styles.textView}>
          <Text style={styles.inactiveText}>
            Новости
            <Image
              style={{marginLeft: 3}}
              source={require('../icons/dropdown.png')}
            />
          </Text>
          <Text style={styles.activeText}>
            Интересное
            <View
              style={{
                width: 100,
                height: 2,
                borderRadius: 2,
                backgroundColor: '#3F8AE0',
              }}
            />
          </Text>
        </View>
        <Image
          style={{marginLeft: 10}}
          source={require('../icons/notification.png')}
        />
      </View>
      <View style={styles.headerNavigate}>
        <View
          style={{width: 87, justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.activeTab}>
            <Text style={styles.activeNavigateText}>Для вас</Text>
          </View>
        </View>
        <View
          style={{width: 86, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.navigateText}>Музыка</Text>
        </View>
        <View
          style={{width: 90, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.navigateText}>Фильмы</Text>
        </View>
        <View
          style={{width: 74, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.navigateText}>Осень</Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#ECEDF1'}}>
        <Image
          style={{alignSelf: 'center'}}
          source={require('../images/news.png')}
        />
      </ScrollView>
      <View style={styles.bottomNavigate}>
        <View style={styles.bottomTab}>
          <Image source={require('../icons/news.png')} />
          <Text style={styles.activeBottomText}>Новости</Text>
        </View>
        <View style={styles.bottomTab}>
          <Image source={require('../icons/services.png')} />
          <Text style={styles.bottomText}>Сервисы</Text>
        </View>
        <View style={styles.bottomTab}>
          <Image source={require('../icons/message.png')} />
          <Text style={styles.bottomText}>Сообщения</Text>
        </View>
        <View style={styles.bottomTab}>
          <Image source={require('../icons/clip.png')} />
          <Text style={styles.bottomText}>Клипы</Text>
        </View>
        <View style={styles.bottomTab}>
          <Image source={require('../icons/profile.png')} />
          <Text style={styles.bottomText}>Профиль</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{
            marginTop: -104,
            marginLeft: Dimensions.get('window').width - 52,
          }}
          onPress={() => navigation.navigate('Map')}>
          <Image source={require('../icons/globe.png')} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 52,
    // backgroundColor:
    //   'linear-gradient(180deg, rgba(245, 245, 245, 0.0001) 0%, rgba(245, 245, 245, 0.0156863) 9.22%, rgba(245, 245, 245, 0.054902) 18.76%, rgba(245, 245, 245, 0.117647) 28.48%, rgba(245, 245, 245, 0.2) 38.19%, rgba(245, 245, 245, 0.290196) 47.75%, rgba(245, 245, 245, 0.392157) 56.99%, rgba(245, 245, 245, 0.501961) 65.75%, rgba(245, 245, 245, 0.607843) 73.87%, rgba(245, 245, 245, 0.709804) 81.18%, rgba(245, 245, 245, 0.8) 87.52%, rgba(245, 245, 245, 0.882353) 92.74%, rgba(245, 245, 245, 0.945098) 96.66%, rgba(245, 245, 245, 0.984314) 99.14%, #F5F5F5 100%);',
    padding: 2,
    marginLeft: 12,
    marginRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textView: {
    width: 263,
    height: '100%',
    paddingBottom: 3,
    flexDirection: 'row',
  },
  inactiveText: {
    height: 48,
    width: 131.5,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#818C99',
    paddingTop: 13.5,
    paddingLeft: 3.5,
    alignSelf: 'center',
  },
  activeText: {
    height: 48,
    width: 131.5,
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#000',
    paddingTop: 13.5,
    paddingBottom: 8,
    paddingLeft: 0.5,
    alignSelf: 'center',
  },
  headerNavigate: {
    height: 46,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  navigateText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#818C99',
  },
  activeTab: {
    width: 79,
    height: 30,
    backgroundColor: '#EBEDF0',
    borderRadius: 8,
    justifyContent: 'center',
  },
  activeNavigateText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#6D7885',
  },
  bottomNavigate: {
    height: 48,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bottomTab: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  bottomText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#99A2AD',
  },
  activeBottomText: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    textAlign: 'center',
    letterSpacing: 0.2,
    color: '#2975CC',
  },
});
