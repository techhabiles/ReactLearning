import {Alert, Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const SignUpScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Confirm Password"
        />
        <View style={styles.fixedText}>
          <Button
            color=""
            title="Sign Up"
            onPress={() => Alert.alert('For Demo purpose only')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 16,
  },
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  fixedText: {
    margin: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
});
