import React from 'react';
import type { Node } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const Home: () => Node = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => {}} style={{ paddingBottom: 25 }}>
          <Text style={{ ...styles.subtitle, fontSize: 12, paddingLeft: 10 }}>
            ら{'\t'.repeat(5)}ん{'\t'.repeat(5)}だ{'\t'.repeat(4)}む
          </Text>
          <Text style={{ ...styles.item }}>ランダム</Text>
          <Text
            style={{
              ...styles.subtitle,
              paddingLeft: 10,
            }}>
            Random
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingBottom: 25 }}>
          <Text
            style={{
              ...styles.subtitle,
              fontSize: 12,
              paddingLeft: 10,
            }}>
            たん{'\t'.repeat(3)}ご{'\t'.repeat(12)}み
          </Text>
          <Text style={{ ...styles.item }}>単語を見る</Text>
          <Text
            style={{
              ...styles.subtitle,
              paddingLeft: 10,
            }}>
            Browse words
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingBottom: 25 }}>
          <Text
            style={{
              ...styles.subtitle,
              fontSize: 12,
              paddingLeft: 10,
            }}>
            たん{'\t'.repeat(3)}ご{'\t'.repeat(11)}つい{'\t'.repeat(3)}か
          </Text>
          <Text style={{ ...styles.item }}>単語を追加</Text>
          <Text
            style={{
              ...styles.subtitle,
              paddingLeft: 10,
            }}>
            Add words
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('HowTo')}
          style={{ paddingBottom: 25 }}>
          <Text
            style={{
              ...styles.subtitle,
              fontSize: 12,
              paddingLeft: 10,
            }}>
            {'\t'.repeat(13)}かた
          </Text>
          <Text style={{ ...styles.item }}>やり方</Text>
          <Text
            style={{
              ...styles.subtitle,
              paddingLeft: 10,
            }}>
            How to Play
          </Text>
        </TouchableOpacity>
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
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  backdrop: {
    position: 'absolute',
    bottom: -90,
    left: -40,
    paddingTop: 150,
    zIndex: -1,
    fontSize: 350,
    lineHeight: 330,
    opacity: 0.65,
  },
});

export default Home;
