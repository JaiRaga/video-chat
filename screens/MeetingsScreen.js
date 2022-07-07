import {
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import StartMeeting from '../components/StartMeeting';
import { API_URL } from '../constants/api';

let socket;

const menuIcons = [
  { id: 1, name: 'microphone', title: 'Mute', customColor: '#efefef' },
  { id: 2, name: 'video-camera', title: 'Stop Camera' },
  { id: 3, name: 'upload', title: 'Share Content' },
  { id: 4, name: 'group', title: 'Participants' },
];

const MeetingsScreen = () => {
  const [hasConnection, setConnection] = useState(false);
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [activeUsers, setActiveUsers] = useState([
    // { userName: 'Pattu Amma' },
    // { userName: 'Ram Pappa' },
  ]);
  const [startCamera, setStartCamera] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onStartCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access Denied');
    }
  };

  const joinRoom = () => {
    onStartCamera();
    socket.emit('join-room', { roomId, userName: name });
  };

  useEffect(() => {
    socket = io(API_URL, { transports: ['websocket'] });
    socket.io.on('open', () => {
      console.log('client connected');
      setConnection(true);
    });
    socket.on('all-users', (users) => {
      setActiveUsers((prevUsers) => [...prevUsers, ...users]);
      console.log(activeUsers);
    });
    socket.io.on('close', () => setConnection(false));

    return () => {
      socket.disconnect();
      socket.removeAllListeners();
    };
  }, []);
  console.log(activeUsers);
  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={styles.innerContainer}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle="fullScreen"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          ></Modal>
          {/* Active Users section */}
          <View style={styles.activeUsersContainer}>
            {/* camera container */}
            <View style={styles.cameraContainer}>
              <Camera
                type="front"
                style={[
                  activeUsers.length <= 1
                    ? styles.fullScreenCamera
                    : styles.smallScreenCamera,
                ]}
              ></Camera>
              {activeUsers
                .filter((user) => user.userName !== name)
                .map((user, index) => (
                  <View style={styles.activeUserContainer} key={index}>
                    <Text style={{ color: 'white' }}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          {/* footer */}
          <View style={styles.menu}>
            {menuIcons.map((icon, index) => (
              <TouchableOpacity style={styles.tile} key={index}>
                <FontAwesome name={icon.name} size={24} color="#ffffff" />
                <Text style={styles.textTile}>{icon.title}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.tile}
            >
              <FontAwesome name="comment" size={24} color="#ffffff" />
              <Text style={styles.textTile}>Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  innerContainer: {
    flex: 1,
  },
  cameraContainer: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'black',
    justifyContent: 'center',
  },
  fullScreenCamera: {
    width: '100%',
    height: 600,
  },
  smallScreenCamera: {
    width: 180,
    height: 180,
  },
  activeUsersContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  activeUserContainer: {
    borderColor: 'grey',
    borderWidth: 1,
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tile: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginTop: 15,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 14,
  },
  textTile: {
    color: 'white',
    marginTop: 10,
  },
});
