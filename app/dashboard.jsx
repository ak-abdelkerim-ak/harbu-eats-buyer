import { useEffect, useState } from "react"
import { Text, View, Pressable, ScrollView, Image, FlatList } from "react-native"
import Carousel from "react-native-snap-carousel"
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from "expo-router"
import { Ionicons } from '@expo/vector-icons'
import Item from "../components/item"
import itemsdata from '../data/string/items.json'
import sellers from '../data/string/sellers.json'

//dead poll
export default function Dashboard() {
    const item_type_list = ['Kurs', 'Msa', 'Rat', 'Drinks']
    const [item_type, set_item_type] = useState(item_type_list[0])
    const [seller, set_seller] = useState(sellers[0]['id'])
    const [items, set_items] = useState(itemsdata)
    const [orders, set_orders] = useState([])
    const router = useRouter()
    useEffect(() => {
        set_items
    }, [item_type]) 
    console.log(seller)
    console.log(item_type)
    console.log(items)
    console.log(items[seller][item_type])

    return (
        <LinearGradient
            colors={['#86efac', '#93c5fd']}
            className='flex-1 pt-10  '
        >
            <View className='flex-row p-2'>
                <Pressable
                    onPress={() => { }}
                    className='p-2 bg-white/80 rounded-xl'
                >
                    <Ionicons name="menu-outline" size={32} color="#3b82f6" />
                </Pressable>
                <View className='flex-1 items-center justify-center'>
                    <Text className=''>Kebele 02, Nous 05</Text>
                </View>
                <View className='flex-row space-x-2'>
                    <Pressable
                        onPress={() => { router.push('order') }}
                        className='p-2 bg-white/80 rounded-xl'
                    >
                        <Ionicons name="map-outline" size={32} color="#f97316" />
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            router.push({
                                pathname: 'cart',
                                params: { orders: orders }
                            })
                        }}
                        className='relative p-2 bg-white/80 rounded-xl'
                    >
                        <Ionicons name="cart-outline" size={32} color="#22c55e" />
                        <Text className='absolute -top-2 -right-1 py-1 px-2 bg-red-500 rounded-full text-white'>{orders.length}</Text>
                    </Pressable>
                </View>
            </View>

            <View className='mb-10'>
                <FlatList
                    data={item_type_list}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => { set_item_type((() => item)) }}>
                            <LinearGradient
                                colors={item == item_type ? ['#f97316', '#a855f7'] : ['#3b82f6', '#22c55e']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                className='mx-2 py-1 px-4 rounded-3xl'
                            >
                                <Text className='text-white text-center text-3xl'>{item}</Text>
                            </LinearGradient>
                        </Pressable>
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className='p-2 '
                />
            </View>

            <Carousel
                containerCustomStyle={{
                    overflow: 'visible',
                    // backgroundColor: 'blue'
                }}
                data={items[seller][item_type]}
                loop={true}
                renderItem={({ item }) =>
                    <Item
                        item={item}
                        set_orders={set_orders}
                        item_type={item_type}
                        seller={seller}
                        set_items={set_items}
                    />
                }
                firstItem={1}
                inactiveSlideOpacity={0.75}
                inactiveSlideScale={0.77}
                sliderWidth={400}
                itemWidth={250}
                slideStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />

            <Carousel
                containerCustomStyle={{
                    overflow: 'visible',
                    // backgroundColor: 'purple'
                }}
                data={sellers}
                loop={true}
                renderItem={({ item }) =>
                    <Pressable
                        onPress={() => { set_seller(() => item.id) }}
                        className='relative w-[280] h-32 bg-white/50 rounded-2xl p-2'
                    >
                        <Image
                            source={{ uri: item.pics }}
                            blurRadius={50}
                            className='absolute top-0 left-0 right-0 bottom-0 w-[280] h-32 rounded-2xl'
                        />
                        <View className='flex-1 justify-center items-center'>
                            <Text className=' text-center text-xl text-white'>{item.name}</Text>
                        </View>
                        <View className='p-2 flex-row '>
                            <Text className='flex-1 text-center text-xl text-white'>
                                <Text className='font-extrabold'>{item.distance} </Text>
                                <Text className=''> mil</Text>

                            </Text>
                            <Text className='flex-1 text-center text-xl text-white'>
                                <Text className='font-extrabold'>{item.time} </Text>
                                <Text className=''> min</Text>
                            </Text>
                        </View>
                    </Pressable>
                }
                firstItem={1}
                inactiveSlideOpacity={0.75}
                inactiveSlideScale={1}
                sliderWidth={400}
                itemWidth={300}
                slideStyle={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            />
        </LinearGradient>
    )
}