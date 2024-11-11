import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function LeaveRequestScreen() {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    Alert.alert('Success', 'Leave request submitted');
    setReason('');
    setDescription('');
    setDate(new Date());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Reason for leave"
        value={reason}
        onChangeText={setReason}
      />
      <TextInput
        style={styles.input}
        placeholder="Description/Note"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <DateTimePicker
        value={date}
        mode="date"
        display="default"
        onChange={(event) => setDate(date)}
      />
      <Button title="Submit Leave Request" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});