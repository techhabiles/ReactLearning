import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const FetchApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = () => {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setMovies(json.movies);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert('Error while fetchig movies');
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const renderItem = ({item}: {item: Movie}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.title}>Movie Title: {item.title}</Text>
        <Text style={styles.year}>Release Year: {item.releaseYear}</Text>
      </View>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default FetchApi;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 8,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'column',
    margin: 4,
    padding: 4,
    backgroundColor: '#481f5e',
    textAlignVertical: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#c253fd',
  },
  title: {
    paddingStart: 8,
    color: 'white',
    fontSize: 20,
  },
  year: {
    paddingStart: 8,
    color: 'white',
    fontSize: 18,
  },
});
