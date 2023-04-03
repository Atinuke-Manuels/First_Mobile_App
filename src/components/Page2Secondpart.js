import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'

const Page2Secondpart = () => {
  return (
    <View style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 10,
      }}>
        <Text style={{fontWeight: 700, marginBottom: 18, fontSize: 16}}>Grilled Cheese Salad {'\n'} with Cream</Text>
        <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}> 
            <Image 
            source={require('../../src/assets/icons/minus.png')}
            style={{width: 15,
                height: 15,
                marginLeft: 10,
                tintColor: 'black',
                marginRight: 8,
                }}/>
         <Text>1</Text>
         <Image 
         source={require('../../src/assets/icons/cross.png')}
         style={{width: 15,
            height: 15,
            marginLeft: 10,
            }}/>
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
            marginTop: 10, 
            marginBottom: 15, 
            fontSize: 14}}>
                Description</Text>
            <Text 
            style={{
                color: 'grey', 
                fontSize: 11,
                marginBottom: 40}}>
                It is quiet Interesting to work on a project like this{'\n'}
                though very challenging but at least it is doable.{'\n'}
                <Text style={{fontWeight: 700, color: '#00bcb8'}}>Read More..</Text>
            </Text>
        
      </View>
      <View style={{alignItems: 'center',
    marginBottom: 30}}>
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


  )
}

export default Page2Secondpart