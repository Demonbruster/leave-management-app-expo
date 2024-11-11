
import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';


const requests = [
  { id: '1', reason: 'Vacation', date: '2024-11-15' },
  { id: '2', reason: 'Sick Leave', date: '2023-11-11' },
];

export default function LeaveRequestsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.reason}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: 'blue',
    padding: 20,
    marginVertical: 8,
  },
});