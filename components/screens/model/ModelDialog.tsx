import {
  ActivityIndicator,
  Button,
  Linking,
  Modal,
  StyleSheet,
  View,
} from 'react-native';
import React, {useState} from 'react';

const ModelDialog = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={showDialog}>
        <View style={styles.modal}>
          <ActivityIndicator style={styles.ai} size="large" color="red" />
          <Button
            title="Close Dialog"
            onPress={() => setShowDialog(false)}></Button>
        </View>
      </Modal>

      <Button title="Show Dialog" onPress={() => setShowDialog(true)}></Button>
      <View style={styles.ai}>
        <Button
          title="More Info"
          onPress={() =>
            Linking.openURL('https://reactnative.dev/docs/modal')
          }></Button>
      </View>
    </View>
  );
};

export default ModelDialog;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    margin: 4,
    backgroundColor: 'lightgrey',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  ai: {
    margin: 20,
  },
});
