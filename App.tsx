import {
  View,
  Text,
  Animated,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';

const App = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [visible, setVisible] = useState(false);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollPosition = e.nativeEvent.contentOffset.y;
    const position = scrollPosition > 0;
    setVisible(position);

    setTimeout(() => {
      setVisible(false);
    }, 1000);
  };

  useEffect(() => {
    Animated.timing(scrollY, {
      toValue: visible ? 100 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [visible, scrollY]);

  return (
    <View>
      <ScrollView onScroll={handleScroll} showsVerticalScrollIndicator={false}>
        {Array.from({length: 20}, (_, i) => (
          <Animatable.View
            animation={'fadeInRight'}
            duration={i * 100}
            key={i}
            style={{
              marginVertical: 10,
              marginHorizontal: 20,
              height: 50,
              backgroundColor: 'red',
            }}>
            <Text>{i}</Text>
          </Animatable.View>
        ))}
      </ScrollView>
      <Animated.View
        style={{
          position: 'absolute',
          bottom: 10,
          borderRadius: 50,
          width: '96%',
          marginHorizontal: 10,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
          transform: [{translateY: scrollY}],
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Button checkout
        </Text>
      </Animated.View>
    </View>
  );
};

export default App;

// import React, {useEffect, useRef, useState} from 'react';
// import {
//   View,
//   Button,
//   StyleSheet,
//   Animated,
//   Easing,
//   Dimensions,
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';

// const App = () => {
//   const positionY = useRef(new Animated.Value(0)).current;
//   const positionX = useRef(new Animated.Value(0)).current;
//   const {width, height} = Dimensions.get('window');

//   const moveCircleDown = () => {
//     Animated.timing(positionY, {
//       toValue: height - 90,
//       duration: 1000,
//       useNativeDriver: true,
//       easing: Easing.bounce,
//     }).start();
//   };

//   const moveCircleUp = () => {
//     Animated.timing(positionY, {
//       toValue: 0,
//       duration: 1000,
//       useNativeDriver: true,
//       easing: Easing.bounce,
//     }).start();
//   };

//   const moveCircleRight = () => {
//     Animated.timing(positionX, {
//       toValue: 0,
//       duration: 1000,
//       useNativeDriver: true,
//       easing: Easing.bounce,
//     }).start();
//   };

//   const moveCircleLeft = () => {
//     Animated.timing(positionX, {
//       toValue: width - 50,
//       duration: 1000,
//       useNativeDriver: true,
//       easing: Easing.bounce,
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={[
//           styles.circle,
//           {
//             transform: [{translateY: positionY}, {translateX: positionX}],
//           },
//         ]}
//       />
//       <View>
//         <View
//           style={{
//             alignSelf: 'center',
//             marginBottom: 10,
//             width: '50%',
//           }}>
//           <Button title="up" onPress={moveCircleUp} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Button title="right" onPress={moveCircleRight} />

//           <Animatable.Text
//             animation="zoomIn"
//             // iterationCount={'infinite'}
//             easing={'ease-in-out'}
//             direction="alternate"
//             style={{
//               fontSize: 31,
//               alignSelf: 'center',
//               marginTop: 10,
//             }}>
//             Test
//           </Animatable.Text>

//           <Button title="left" onPress={moveCircleLeft} />
//         </View>
//         <View
//           style={{
//             alignSelf: 'center',
//             marginTop: 10,
//             width: '50%',
//           }}>
//           <Button title="down" onPress={moveCircleDown} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   circle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: 'blue',
//     position: 'absolute',
//     top: 0,
//   },
// });

// export default App;
