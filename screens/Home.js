import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HomeItem } from './../components';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.backdrop}>勉強</Text>
      <View style={styles.titleContainer}>
        <Text style={{ ...styles.title }}>Benkyo</Text>
        <Text
          style={{
            ...styles.subtitle,
            textAlign: 'center',
          }}>
          Japanese Study App
        </Text>
      </View>
      <View style={styles.main}>
        <HomeItem
          navigation={navigation}
          itemTitle="ランダム"
          itemSubtitle="Random"
          screenToNavigate="Game"
          isRandom
        />
        <HomeItem
          navigation={navigation}
          itemTitle="単語リスト"
          itemSubtitle="Word List"
          screenToNavigate="List"
        />
        <HomeItem
          navigation={navigation}
          itemTitle="やり方"
          itemSubtitle="How to Play"
          screenToNavigate="HowTo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 24,
    backgroundColor: '#161f23',
  },
  titleContainer: {
    padding: 5,
  },
  title: {
    fontFamily: 'Nunito-Bold',
    fontSize: 90,
    textAlign: 'center',
    color: '#dadce1',
  },
  subtitle: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    fontWeight: '400',
    color: '#dadce1',
  },
  item: {
    fontSize: 38,
    fontWeight: '600',
    color: '#dadce1',
  },
  main: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 48,
  },
  backdrop: {
    position: 'absolute',
    left: -40,
    bottom: -90,
    paddingTop: 150,
    zIndex: -1,
    fontSize: 350,
    lineHeight: 330,
    opacity: 0.5,
  },
});

export default Home;
