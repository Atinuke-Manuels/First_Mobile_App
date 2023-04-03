import { View, Text , Image} from 'react-native'
import React from 'react'

const Thirdsection = () => {
  return (
    <View 
    style={{ 
        paddingHorizontal: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 50,
        // justifyContent: 'space-between',
        width: '100%'}}>
         <View>
            <Text 
            style={{
                fontWeight: 650, 
                marginBottom: 15,
                marginTop: 15
                }}>Close to you</Text>
                 <Image 
            // resizeMode = "contain"
            source={require('../../src/assets/images/thirdfood.jpg')}
            style={{
                width: 140,
                height: 130,
                borderRadius: 15,
              }}/>
              </View>
            <View >

             <View style={{marginTop: 38}}>
                <Text style={{fontWeight: 500}}>Big Fried Chicken</Text>
                <Text style={{color: 'grey'}}>Gaminbar . 9.2</Text>
                <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image resizeMode = "contain"
            source={require('../../src/assets/icons/star.png')}
            style={{ 
                width: 10,
                height: 10,
                marginRight: 5,
                justifyContent: "center",
                tintColor: "gold",
              }}/>
              <Text style={{fontSize: 10}}>4.4</Text>
              </View>
             </View>
            </View>
            <View >
            <Text 
            style={{
                color: '#00bcb8',
                 fontSize: 11, 
                 fontWeight: 700,
                 paddingLeft: 30,
                 }}>$4.2</Text>

            </View>
    </View>
  )
}

export default Thirdsection