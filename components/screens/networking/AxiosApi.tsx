import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
type Movie = {
  id: string;
  title: string;
  releaseYear: string;
};

const base_url = 'https://reactnative.dev';

const AxiosApi = () => {
  const [isLoading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = () => {
    axios({method: 'get', url: `${base_url}/movies.json`})
      .then(response => {
        setLoading(false);
        setMovies(response.data.movies);
      })
      .catch(err => {
        setLoading(false);
        Alert.alert('Erro while fetching data');
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
          initialNumToRender={1}
          data={movies}
          keyExtractor={({id}) => id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default AxiosApi;

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
