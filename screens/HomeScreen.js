import { View, Text, ScrollView } from 'react-native'
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
import Categories from '../components/categories';

const HomeScreen = () => {

    const navigation=useNavigation();
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false,
        });
    },[])
  return (
    <SafeAreaView className="bg-white pt-5">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-4">
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


      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3" >
         <SearchIcon color="gray" size={20} />
         <TextInput placeholder="restaurants and cuisines"
         keyboardType="default"
         /> 
        </View>
        <AdjustmentsIcon color="#00CCBB"/>
      </View>
      <UserIcon size={35} color="#00CCBB"/>

      <ScrollView className="bg-gray-100 flex-1">
        <Categories/>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;