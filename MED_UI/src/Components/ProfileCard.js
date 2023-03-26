import { View,Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native'


const ProfileCard = ({
    name,
    pid,
    sex,
    age,
    weight,
}) => {
  return (
    <TailwindProvider>
      <TouchableOpacity >
      <Text className=' text-xl font-bold pl-3 pb-2 '>PROFILE CARD</Text>
      <View className='flex-row'>
      <Image 
        className='mx-4 h-24 w-24 rounded-full' 
        source={{uri:"https://th.bing.com/th/id/OIP.Cl56H6WgxJ8npVqyhefTdQHaHa?pid=ImgDet&rs=1"}}
        />
        <View className='pl-4 pb-4'>
         <Text className='font-bold'>{name}</Text>
         <Text className='font-bold'>{pid}</Text>
         <Text className='font-bold'>{sex}</Text>
         <Text className='font-bold'>{age}</Text>
         <Text className='font-bold'>{weight}</Text>
        </View>
        </View>
       </TouchableOpacity>
    </TailwindProvider>
  )
}

export default ProfileCard