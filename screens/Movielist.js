import React, { useState } from 'react';
import { Button, Text, View, FlatList,StyleSheet,StatusBar } from 'react-native';







const Item = ({ title, openingText, releaseDate }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.text}>{openingText}</Text>
    <Text style={styles.date}>{releaseDate}</Text>
  </View>


);

const Movielist = () => {
  const [movies,setMovies]= useState([]);

  const renderItem = ({ item }) => (
    <Item title={item.title} openingText={item.opening_crawl} releaseDate={item.release_date} />
  );

  function fetchMoviesHandler() {
    fetch('https://swapi.dev/api/films').then(response=>{
      return response.json();
    }).then(data=> {
      setMovies(data.results);
    }).catch(err=>err);
  }

  return (
    <View style={styles.container}>
      <Button
        title="Fetch Movies"
        onPress={fetchMoviesHandler}
      />
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.episode_id}
      />
    </View>
  );
}

















const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#250a4a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    
  },
  title: {
    fontSize: 32,
    color: 'yellow',
    textAlign: 'center',
    marginVertical: 8,
  },
  text:{
    fontSize: 20,
    color: 'white',
    marginVertical: 8,
  },
  date:{
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  }
});


export default Movielist;