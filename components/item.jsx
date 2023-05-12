import { useState } from "react"
import { Text, View, Pressable, Image } from "react-native"
import { Ionicons } from '@expo/vector-icons'

export default function Item({
    item,
    set_orders,
    item_type,
    seller,
    set_items,
}) {

    const [amount, set_amount] = useState(1)

    return (
        <View className='w-[250] h-[300] bg-white/50 rounded-3xl '>
            <View className='relative w-[250] h-[300]'>
                <Image
                    source={{ uri: item.pics }}
                    blurRadius={50}
                    className='absolute top-0 left-0 right-0 w-[250] h-[300] rounded-3xl'
                />
                <View className='justify-center items-center -mt-10'>
                    <View className='rounded-full shadow-2xl shadow-black/50 bg-white/50 '>
                        <Image
                            source={{ uri: item.pics }}
                            className='w-40 h-40 rounded-full '
                        />
                    </View>
                </View>
                <View className='flex-1 justify-between'>
                    <Text className='p-1 text-3xl text-white'>{item.name}</Text>
                    <View className='flex-row'>
                        <Text className='flex-1 text-center text-2xl text-white'>
                            <Text className='font-extrabold'>{item.Price} </Text>
                            <Text className=''> ETB</Text>
                        </Text>
                        <Text className='flex-1 text-center text-2xl text-white'>
                            <Text className='font-extrabold'>{item.time} </Text>
                            <Text className=''> min</Text>
                        </Text>
                    </View>
                    <View className='flex-row space-x-2 p-2'>
                        <View className=' flex-row space-x-1 rounded-xl overflow-hidden '>
                            <Pressable
                                onPress={() => { amount != 1 && set_amount(prev => prev - 1) }}
                                className='p-2 bg-blue-500/80 justify-center items-center'
                            >
                                <Ionicons name="remove" size={32} color="white" />
                            </Pressable>
                            <Text className='bg-blue-500/80 py-2 px-4 text-white text-xl'>{amount}</Text>
                            <Pressable
                                onPress={() => { set_amount(prev => prev + 1) }}
                                className='p-2 bg-blue-500/80 justify-center items-center'
                            >
                                <Ionicons name="add" size={32} color="white" />
                            </Pressable>
                        </View>
                        <Pressable
                            onPress={() => {
                                set_orders(prev => [...prev, { ...item, seller, amount }])
                                set_items(prev => (
                                    {
                                        ...prev,
                                        [seller]: {
                                            ...prev[seller],
                                            [item_type]: [...prev[seller][item_type].filter(value => value.id != item.id)]
                                        }
                                    }
                                ))
                            }}
                            className='flex-1 p-2 bg-green-500 rounded-xl justify-center items-center '
                        >
                            <Text className='text-white text-lg'>Add</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}