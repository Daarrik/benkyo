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
    backgroundColor: '#001220',
  },
  titleContainer: {
    padding: 5,
  },
  title: {
    fontSize: 80,
    fontWeight: '600',
    textAlign: 'center',
    color: '#dadce1',
  },
  subtitle: {
    fontSize: 16,
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
    alignItems: 'flex-end',
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
    opacity: 0.65,
  },
});

export default Home;
