import { Text, View, Pressable, FlatList, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import orders from '../data/string/orders.json'
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

            <View className='flex-1 p-2'>
                <FlatList
                    data={orders}
                    renderItem={({ item }) =>
                        <View className='flex-row'>
                            <Image
                                source={`../data/image/${item.pics}`}
                                className='w-10 h-10 rounded-xl'
                            />
                            <View className='flex-1'>
                                <Text className=''>{item.name}</Text>
                                <Text className=''>price  {item.price}</Text>
                                <Text className=''>total  {item.price * item.amount}</Text>
                            </View>
                            <View className='flex-row rounded-xl overflow-hidden space-x-2'>
                                <Pressable
                                    onPress={() => { }}
                                    className='flex-1'
                                >
                                    <Ionicons name="remove-outline" size={24} color="black" />
                                </Pressable>
                                <Text className='flex-1 text-center text-xl'>{item.amount}</Text>
                                <Pressable
                                    onPress={() => { }}
                                    className='flex-1'
                                >
                                    <Ionicons name="add-outline" size={24} color="black" />
                                </Pressable>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
            </View>

            <View className='p-2'>
                <Text className=''>ETB { }</Text>
                <Pressable
                    onPress={() => { }}
                    className='p-2 bg-white/50 rounded-2xl'
                >
                    <Text className=''>Payment</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}