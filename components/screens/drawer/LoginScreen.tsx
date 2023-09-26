import {Alert, Button, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';

const DrawerMenu = () => {
  const [username, onChangeUserName] = useState('');
  const [password, onChangePassword] = useState('');
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeUserName}
          value={username}
          placeholder="E-Mail"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Password"
        />
        <View style={styles.fixedText}>
          <Button
            color=""
            title="Login"
            onPress={() => Alert.alert('For Demo purpose only')}
          />
        </View>
      </View>
    </View>
  );
};
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
export default DrawerMenu;
