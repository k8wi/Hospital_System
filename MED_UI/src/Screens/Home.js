import { View, Text,Image, SafeAreaView } from 'react-native';
import React, {useLayoutEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import ProfileCard from '../Components/ProfileCard';
const HomeScreen = () => {
   const navigation=useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
       });
     }, []);

return(
    <SafeAreaView className='bg-teal-600 pt-10'>
        
    {/*Header*/}
    
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
         source={{uri:'https://pluspng.com/img-png/hospital-png-hd-images-hospital-clipart-icon-pluspng-1983.png'}}
         className="h-10  w-10 bg-gray-300 p-4 rounded-full"
        />   
       <View>
          <Text className='font-bold text-gray-400 text-xs'>home</Text>
          <Text className='font-bold text-xl'>MedDOCS</Text>
       </View>
      </View>   

     <View className='bg-black-900-100 ' >
      <View className='bg-blue-100 pb-2 pt-2 mt-4 mb-4 mx-5 rounded-3xl' >
        <ProfileCard 
           pid="239AC34" 
           name="John Doe" 
           sex="M" 
           age="45" 
           weight="67lbs" 
        />

       </View>
     </View>
     
      
      
    </SafeAreaView>
    
    );
}
   
    
export default HomeScreen;