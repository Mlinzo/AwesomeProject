import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';

const currentTime = ()=>{
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  const time = 
    (hours < 10 ? "0"+hours : hours) + 
    ":" + (minutes < 10 ? "0"+minutes : minutes) + 
    ":" + (seconds < 10 ? "0"+seconds : seconds);
  return time;
}

const randomColor = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

export default function App() {
  const [time, setTime] = useState(currentTime())
  const [color, setColor] = useState(randomColor())

  useEffect(() => {
    const interval = setInterval(() => {setTime(currentTime()); setColor(randomColor()); }, 1000);
    return () => { clearInterval(interval); };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{color: color, fontSize: 40}}>
        {time}
      </Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
