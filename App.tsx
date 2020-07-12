import React from 'react';
import { StyleSheet } from 'react-native';

import { View } from './components/Themed';

import { ListItem } from './components/ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'blue',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: 'grey',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://48pedia.org/images/1/11/2020%E5%B9%B4%E6%97%A5%E5%90%91%E5%9D%8246%E3%83%97%E3%83%AD%E3%83%95%E3%82%A3%E3%83%BC%E3%83%AB_%E5%B0%8F%E5%9D%82%E8%8F%9C%E7%B7%92.jpg"
        author="sample2"
        subject="小坂菜緒がカワイイと小柳の中で話題に…！"
      />
    </View>
  );
}
