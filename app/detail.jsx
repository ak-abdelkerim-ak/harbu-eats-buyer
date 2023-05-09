import { Text, View, Pressable, FlatList, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import items from '../data/string/items.json'
import { LinearGradient } from "expo-linear-gradient"

export default function Detail() {
    return (
        <LinearGradient
            colors={['#86efac', '#93c5fd']}
            className='flex-1 pt-10  '
        >
            <View className='justify-between'>
                <Pressable
                    onPress={() => { }}
                    className='p-2 bg-white/50 rounded-xl'
                >
                    <Ionicons name="close-outline" size={24} color="black" />
                </Pressable>
                <View className='flex-1'>
                    <Text className=''></Text>
                </View>
            </View>

            <View className='flex-1'>
                <Image
                    source={`../data/image${items[0]['pics']}`}
                    className=''
                />
            </View>

        </LinearGradient>
    )
}