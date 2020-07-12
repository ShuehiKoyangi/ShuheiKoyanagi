import React, { Props } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

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

export const ListItem = ({ author, imageUrl, subject }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          style={{
            width: 100,
            height: 100,
          }}
          source={{ uri: imageUrl }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.textStyle}>{subject}</Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  );
};
