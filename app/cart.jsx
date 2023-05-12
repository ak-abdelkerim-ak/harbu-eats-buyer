import { Text, View, Pressable, FlatList, Image } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useRouter, useSearchParams } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import sellers from '../data/string/sellers.json'

export default function Detail() {
    const params = useSearchParams()
    const { orders } = params
    console.log(orders)
    const router = useRouter()

    return (
        <LinearGradient
            colors={['#86efac', '#93c5fd']}
            className='flex-1 pt-10  '
        >
            <View className='flex-row p-2'>
                <Pressable
                    onPress={() => { router.back() }}
                    className='p-1 bg-white/80 rounded-full'
                >
                    <Ionicons name="close-outline" size={32} color="#ef4444" />
                </Pressable>
                <View className='flex-1 items-center justify-center'>
                    <Text className=''>Kebele 02, Nous 05</Text>
                </View>
            </View>

            <View className='flex-1 p-2 '>
                <FlatList
                    data={orders}
                    renderItem={({ item }) =>
                        <View className='flex-row m-2 '>
                            <Image
                                source={{ uri: item.pics }}
                                className='w-16 h-16 rounded-xl'
                            />
                            <View className='flex-1 justify-center pl-2'>
                                <Text className='text-lg'>{item.name}</Text>
                                <View className='flex-row space-x-1'>
                                    <Text className='flex-1 text-center '>{item.price} ETB</Text>
                                    <Text className='flex-1 text-center '>~ {item.time + sellers.find(value => value.id == item.seller)['time']} min</Text>
                                </View>
                            </View>
                            <View className='flex-row rounded-xl overflow-hidden space-x-1'>
                                <Pressable
                                    onPress={() => { }}
                                    className='p-2 bg-white/80 justify-center items-center'
                                >
                                    <Ionicons name="remove-outline" size={32} color="black" />
                                </Pressable>
                                <View className='py-2 px-4 bg-white/80 justify-center items-center'>
                                    <Text className='text-center text-3xl'>{item.amount}</Text>
                                </View>
                                <Pressable
                                    onPress={() => { }}
                                    className='p-2 bg-white/80 justify-center items-center'
                                >
                                    <Ionicons name="add-outline" size={32} color="black" />
                                </Pressable>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                    className=''
                />
            </View>

            <View className='p-2 py-5 bg-white/50 rounded-t-3xl flex-row'>
                <View className='flex-1  flex-row justify-center items-center'>
                    <Text className='text-2xl text-center font-extrabold'>
                        {
                            orders.reduce((sum, value) => sum + value.price, 0)
                        }
                    </Text>
                    <Text className='text-2xl text-center'> ETB</Text>
                </View>
                <Pressable
                    onPress={() => { }}
                    className='flex-1 p-2 bg-green-500/80 rounded-xl'
                >
                    <Text className='text-center text-2xl text-white'>Payment</Text>
                </Pressable>
            </View>
        </LinearGradient>
    )
}