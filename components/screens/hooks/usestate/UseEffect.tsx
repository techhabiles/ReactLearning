import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffect = () => {
  const [siteVisit, setSiteVisit] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // implementation to be executed on side effect
    console.log(' Site visit is ' + siteVisit);
    console.log(' Counter  is  ' + counter);
    // clean up function
    return () => {
      console.log(' UseEffect cleanup function is called');
    };
  }, [siteVisit, counter]); // dependency items, once any of depency changes, side effect is created

  const increaseVisit = () => {
    setSiteVisit(siteVisit + 1);
  };
  const decreaseVisit = () => {
    setSiteVisit(siteVisit - 1);
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textVisit}>Site Visit By {siteVisit} persons</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => increaseVisit()}>
          <Text style={styles.textButton}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => decreaseVisit()}>
          <Text style={styles.textButton}>Decrease </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textVisit}>Counter is {counter}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => increaseCounter()}>
          <Text style={styles.textButton}>Increase Counter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => decreaseCounter()}>
          <Text style={styles.textButton}>Decrease Counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center'},
  textVisit: {
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  textButton: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  button: {
    margin: 8,
    borderWidth: 1,
    width: 100,
    padding: 10,
    justifyContent: 'center',
    height: 40,
    borderRadius: 8,
    borderColor: '#c253fd',
    backgroundColor: '#481f5e',
  },
});
export default UseEffect;
