import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-virtualized-view'
import React from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseDetails() {
  const item = useLocalSearchParams();
  const router = useRouter();

  return (
    <View className="flex flex-1 bg-black">
      <View className="shadow-md bg-white rounded-b-[20px]">
        <Image
          source={{ uri: item.gifUrl }}
          contentFit='cover'
          style={{ width: wp(100), height: wp(95) }}
          className="rounded-b-[40px]"
        />
      </View>

      <TouchableOpacity
        onPress={() => router.back()}
        className="mx-2 absolute rounded-full mt-2 right-0"
      >
        <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
      </TouchableOpacity>

      {/* Details */}
      <ScrollView className="mx-4 space-y-2 mt-3" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        <View>
          <Animated.Text
            entering={FadeInDown.duration(300).springify()}
            style={{ fontSize: hp(3.0), marginBottom: hp(1) }}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            <Text style={{color:"#F43F5E", fontSize: hp(3.5)}}>{item?.name}</Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(300).springify()}
            style={{ fontSize: hp(2), marginBottom: hp(1) }}
            className="text-neutral-700 tracking-wide font-bold"
          >
            <Text style={{color:'white'}}>Equipment:</Text> <Text className="font-bold text-neutral-400">{item?.equipment}</Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(200).duration(300).springify()}
            style={{ fontSize: hp(2), marginBottom: hp(1) }}
            className="font-bold"
          >
            <Text style={{color:'white'}}>Secondary Muscles:</Text> <Text className="font-bold text-neutral-400">{item?.secondaryMuscles}</Text>
          </Animated.Text>
          <Animated.Text
            entering={FadeInDown.delay(300).duration(300).springify()}
            style={{ fontSize: hp(2), marginBottom: hp(1) }}
            className="text-neutral-700 tracking-wide font-bold"
          >
            <Text style={{color:'white'}}>Target:</Text> <Text className="font-bold text-neutral-400">{item?.target}</Text>
          </Animated.Text>
        </View>

        {/* Instructions */}
        <View>
          <Animated.Text
            entering={FadeInDown.delay(400).duration(300).springify()}
            style={{ fontSize: hp(3), marginBottom: hp(1) }}
            className="font-semibold text-neutral-800 tracking-wide"
          >
            <Text style={{color:'pink'}}>Instructions</Text>
          </Animated.Text>
          <FlatList
            data={item.instructions?.split(',')}
            keyExtractor={(instruction, index) => index.toString()}
            renderItem={({ item: instruction, index }) => (
              <Animated.Text
                entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
                style={{ fontSize: hp(1.5), marginLeft: hp(1) }}
                className="text-neutral-400 font-bold"
              >
                <Text>{'\u2022'} {instruction}</Text>
              </Animated.Text>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
