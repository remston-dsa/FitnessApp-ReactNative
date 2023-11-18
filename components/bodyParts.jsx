import { View, Text, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen'
import { FlatList } from 'react-native-gesture-handler'
import { bodyParts } from '../constants'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import Animated, {FadeInDown} from 'react-native-reanimated'

export default function BodyParts() {
  const router = useRouter();
  return (
    <View className="mx-4">
        <Text
            style={{fontSize: hp(3)}}
            className="font-semibold text-neutral-200"
        >
            Exercises
        </Text>

        <FlatList
            data={bodyParts}
            numColumns={2}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: 20, paddingBottom: 50}}
            columnWrapperStyle={{
                justifyContent: 'space-between'
            }}
            renderItem={({item, index}) => <BodyPartCard router={router} index = {index} item = {item}/>}
        >
        </FlatList>
    </View>
  )
}

const BodyPartCard = ({item, router, index}) => {
    return(
        <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({pathname: '/exercises', params: item})}
                style={{width: wp(44), height: wp(52)}}
                className="flex justify-end p-4 mb-4"
            >
                {/* {console.log("Item In Body Part :", item)} */}
                <Image
                    source={item.image}
                    resizeMode='cover'
                    style={{width: wp(44), height: wp(52)}}
                    className="rounded-[35px] absolute"
                >

                </Image>
                <LinearGradient
                    colors={['transparent', "rgba(0,0,0,1)"]}
                    style={{width: wp(44), height: hp(15)}}
                    start= {{x:0.5, y:0}}
                    end={{x:0.5, y:1}}
                    className="absolute bottom-0 rounded-b-[35px]"
                >
                </LinearGradient>

                <Text
                    style={{fontSize: hp(2.3)}}
                    className="text-white font-semibold text-left tracking-wide"
                >
                    {item?.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    )
}