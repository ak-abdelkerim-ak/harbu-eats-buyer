import { Text, View, Pressable, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import Carousel from "react-native-snap-carousel";
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
    return (
        <LinearGradient
            colors={['#86efac', '#93c5fd']}
            className='flex-1 pt-10  '
        >
            <View className='justify-between'>
                <Pressable
                    onPress={() => { }}
                    className='p-2 bg-white'
                >
                    <Ionicons name="menu-outline" size={24} color="black" />
                </Pressable>
                <View className='space-x-2'>
                    <Pressable
                        onPress={() => { }}
                        className='p-2 bg-white'
                    >
                        <Ionicons name="map-outline" size={24} color="black" />
                    </Pressable>
                    <Pressable
                        onPress={() => { }}
                        className='p-2 bg-white'
                    >
                        <Ionicons name="cart-outline" size={24} color="black" />
                    </Pressable>
                </View>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                className='px-2 pl-2'
            >
                <Pressable onPress={() => { }}>
                    <LinearGradient
                        colors={['#93c5fd', '#86efac']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className='p-2 '
                    >
                        <Text className='text-white text-center text-xl'>Kurs</Text>
                    </LinearGradient>
                </Pressable>
            </ScrollView>

            <View>
                <Carousel
                    containerCustomStyle={{
                        overflow: 'visible'
                    }}
                    data={[
                        {
                            name: 'Full',
                            price: '70',
                            pics: 'full.png',
                        },
                        {
                            name: 'Firfir',
                            price: '60',
                            pics: 'firfir.png',
                        },
                    ]}
                    renderItem={({ item }) =>
                        <View className='relative w-60 h-96 bg-white/50 rounded-2xl '>
                            <View className='absolute top-0 left-0 right-0'>
                                <Image
                                    source={`../data/image/${item.pics}`}
                                    blurRadius={20}
                                    className='w-60 h-60 rounded-full'
                                />
                            </View>
                            <View className='flex-1 '>
                                <Image
                                    source={`../data/image/${item.pics}`}
                                    className='w-40 h-40 rounded-full'
                                />
                                <View className=''>
                                    <Text className='text-center text-xl'>{item.name}</Text>
                                </View>
                            </View>
                        </View>
                    }
                    firstItem={1}
                    inactiveSlideOpacity={0.75}
                    inactiveSlideScale={0.77}
                    sliderWidth={400}
                    itemWidth={260}
                    slideStyle={{
                        display: 'flex',
                        alignItems: 'center'
                    }}
                />
            </View>
        </LinearGradient>
    )
}