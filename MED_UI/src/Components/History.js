import React from 'react'
import { View,Image, Text, TouchableOpacity } from 'react-native'

import { TailwindProvider } from 'tailwindcss-react-native'

const History=({
    a,
    b,
    c,
 })=>{
  return(
     <TailwindProvider>
        <TouchableOpacity>
            <Text className='tetext-xl font-bold pl-3 pb-2 '>HISTORY</Text>
            <Text className='font-bold'>{a}</Text>
            <Text className='font-bold'>{b}</Text>
            <Text className='font-bold'>{c}</Text>
        </TouchableOpacity>
     </TailwindProvider>    
    
    )
}

export default History