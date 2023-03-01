import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLayoutEffect } from 'react';
import { Image } from 'react-native';
import {ChevronDownIcon,
        UserIcon,
        SearchIcon,
        AdjustmentsIcon,
        TextInput,
} from "react-native-heroicons/outline"

const HomeScreen = () => {

    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        });
    },[])
  return (
    <SafeAreaView>
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{url:"https://links.papareact.com/wru"}}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location
          <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB"/>
      </View>


      <View>
        <View>
         <SearchIcon/>
         <TextInput placeholder="restaurants and cuisines"
         keyboardType="default"
         /> 
        </View>
        <AdjustmentsIcon color="#00CCBB"/>
      </View>

    </SafeAreaView>
  )
}

export default HomeScreen