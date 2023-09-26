import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const UseStateHook = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  function handleTextChange(newText: string) {
    setEmail(newText);
    setIsValidEmail(isValidEmailAddress(newText));
  }
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  function isValidEmailAddress(newEmail: string) {
    if (newEmail.match(validRegex)) {
      return true;
    }
    return false;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={newText => handleTextChange(newText)}
          value={email}
          placeholder="E-Mail"
          keyboardType="email-address"
        />
      </View>
      {!isValidEmail ? (
        <Text style={styles.error}>Please enter valid email</Text>
      ) : (
        <Text />
      )}
    </View>
  );
};

export default UseStateHook;

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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 16,
  },
});
