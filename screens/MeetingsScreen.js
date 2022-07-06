import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import StartMeeting from '../components/StartMeeting';
import { API_URL } from '../constants/api';

const MeetingsScreen = () => {
  const [hasConnection, setConnection] = useState(false);
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');

  useEffect(() => {
    const socket = io(API_URL, { transports: ['websocket'] });
    socket.io.on('open', () => {
      console.log('client connected');
      setConnection(true);
    });
    socket.io.on('close', () => setConnection(false));

    return () => {
      socket.disconnect();
      socket.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StartMeeting
        name={name}
        setName={setName}
        roomId={roomId}
        setRoomId={setRoomId}
      />
    </View>
  );
};

export default MeetingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
