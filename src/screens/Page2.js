import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, Pressable, Button} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'
import Page2Secondpart from '../components/Page2Secondpart';
import { useState } from 'react';

const Page2 = () => {

  const navigation = useNavigation();


  let [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0){
    count = count - 1;
    setCount(count);}
  }

  return (
    <SafeAreaView>
        <View 
        resizeMode="cover"
        style={{
            // flex: 1, 
            backgroundColor: 'white',
            paddingHorizontal: 5,
            marginTop: 5,
            height: '100%'
            }}>
            <View style={{width: '100%'}}>
                <Image 
                source={require('../../src/assets/images/grilled.jpg')}
                style={{
                    height: 300,
                    width: '100%',
                    borderRadius: 10,
                    paddingHorizontal: 5,}}/>

                  <View 
                  style={{
                    marginTop: 30,
                    paddingRight: 8,
                    width: 30,
                    height: 23,
                    position: 'absolute',
                    Top: 13,
                    right: 28,
                    backgroundColor: 'white',
                    borderRadius: 5,
                  }}> 
                  <Image source={require('../../src/assets/icons/lock.png')}
                 style ={{width: 20,
                    height: 20,
                    marginLeft: 10,
                    tintColor: 'black',
                    alignSelf: 'center'}}/>
                  </View> 

                  <View
                  style={{
                    marginTop: 30,
                    width: 80,
                    height: 23,
                    position: 'absolute',
                    Top: 13,
                    left: 28,
                    backgroundColor: 'white',
                    borderRadius: 5,
                    color: 'black',
                  alignItems: 'center'}}
                  >
          <Pressable
          onPress={() => navigation.goBack("HomeScreen")}
          ><Text style={{color: 'black',}}>Go Back</Text></Pressable>
            </View>
            </View>
      
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 10,
      }}>
        <Text style={{fontWeight: 700, marginBottom: 18, fontSize: 18}}>Grilled Cheese Salad {'\n'} with Cream</Text>
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}> 
         <Pressable
         onPress={ decrementCount }
           style={{width: 25,
            height: 25,
            marginLeft: 10,
            tintColor: 'black',
            marginRight: 8,
            }}>
               <Image source={require('../../src/assets/icons/minus.png')}
               style={{width: 30,
                height: 30,
                marginLeft: 0,
                // tintColor: 'grey',
                marginRight: 8,
               }}
              />
              </Pressable>
         <Text>{count}</Text>
         <Pressable
         onPress={ incrementCount }
          >
              <Image source={require('../../src/assets/icons/cross.png')}
               style={{width: 28,
                height: 28,
                marginLeft: 10,
                // tintColor: 'grey',
                marginRight: 8,
               }}
              />
              </Pressable>
        </View>
      </View>
      <View 
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'}} >
      <View style={{display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'}}>
        <Image 
        source={require('../../src/assets/icons/location.png')}
        style={{
            width: 10,
            height: 10,
            marginRight: 5,
            justifyContent: "center",
            tintColor: "gold",
          }}/>
          <Text style={{color: 'grey', fontSize: 11}}>2.3km</Text>
      </View>
      <View style={{display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'}}>
        <Image 
        source={require('../../src/assets/icons/star.png')}
        style={{
            width: 10,
            height: 10,
            marginRight: 5,
            justifyContent: "center",
            tintColor: "gold",
          }}/>
          <Text style={{color: 'grey', fontSize: 11}}>4.2 Ratings</Text>
      </View>
      <View style={{display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'}}>
        <Image 
        source={require('../../src/assets/icons/hourglass.png')}
        style={{
            width: 10,
            height: 10,
            marginRight: 5,
            justifyContent: "center",
            tintColor: "gold",
          }}/>
          <Text style={{color: 'grey', fontSize: 11}}>20-24 Min</Text>
      </View>
      </View>
      <View>
        <Text 
        style={{
            fontWeight: 700,
            marginTop: 30, 
            marginBottom: 15, 
            fontSize: 18}}>
                Description</Text>
            <Text 
            style={{
                color: 'grey', 
                fontSize: 15,
                marginBottom: 40}}>
                It is quiet Interesting to work on a project like this
                though very challenging but at least it is doable.{'\n'}
                <Text style={{fontWeight: 700, color: '#00bcb8', marginTop: 20}}>Read More..</Text>
            </Text>
        
      </View>
      <View style={{alignItems: 'center',
    marginBottom: 40,
    marginTop: 45}}>
        <Image 
        source={require('../../src/assets/icons/double-circle.png')}
        style={{width: 20,
        height: 20,
        }} />
      </View>
      <View style={{display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'}}>
        <View 
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 0.3,
            borderColor: 'orange',
            borderRadius: 15,
            padding: 10,
            width: '47%',
            }}>
            <Image 
            source={require('../../src/assets/icons/chat.png')}
            style ={{width: 15,
                height: 15,
                marginLeft: 10,
                tintColor: 'orange',
                }} />
                <Text style={{fontSize: 11, color: 'orange'}}>chat</Text>
        </View>

        <View 
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 0.3,
            borderColor: 'orange',
            borderRadius: 15,
            padding: 10,
            backgroundColor: 'orange',
            width: '47%',
            }}>
                <Text style={{fontSize: 11, color: 'white'}}>Add chart</Text>
        </View>
      </View>
    </View>
       
    </SafeAreaView>
  )
}
export default Page2