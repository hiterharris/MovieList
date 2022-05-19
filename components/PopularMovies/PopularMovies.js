import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import { useMovies } from '../../hooks';
import { trimTitle } from '../../helpers';

export default function PopularMovies() {
    const { movies } = useMovies();
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
        <Text style={styles.listTitle}>Popular Movies</Text>
        <ScrollView
          style={styles.popularMovies}
          horizontal={true}
          decelerationRate={0}
        >
          {movies?.map((movie, index) => {
            return (
              <View key={index} style={styles.movie}>
                <Image
                  style={styles.moviePoster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                  }}
                />
                <Text style={styles.movieTitle}>{trimTitle(movie.original_title)}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 16,
    },
    popularMovies: {
    },
    movie: {
      alignItems: 'center',
      margin: 16,
    },
    moviePoster: {
      width: 140,
      height: 200,
    },
    listTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
      margin: 12,
    },
    movieTitle: {
      color: '#fff',
      fontWeight: 'bold',
      paddingTop: 8,
      width: '100%',
      textAlign: 'center',
    }
  });
  