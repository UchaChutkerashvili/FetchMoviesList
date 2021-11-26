import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.red}  onPress={() => navigation.navigate('Profile')}>just red</Text>
        <Text style={styles.bigBlue}>just bigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        <Button
        title="Movie List"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default HomeScreen;