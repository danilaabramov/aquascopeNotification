import React, {useState, useCallback, useRef} from 'react';
import {Animated, View, Text, StyleSheet,TouchableOpacity, Image, ScrollView , Switch, Dimensions} from 'react-native';
import { useTheme } from '@react-navigation/native';
import SvgAquarium from "../components/svgAquarium";
import {StatusBar} from "expo-status-bar";
import * as Animatable from "react-native-animatable";
import {Caption, Paragraph} from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {FishClown} from "../components/FishClown";
import {FishOrange} from "../components/FishOrange";
import {FishOrange2} from "../components/FishOrange2";
import {FishBlue} from "../components/FishBlue";
import {ClownLoach} from "../components/ClownLoach";
import {NanoFish} from "../components/NanoFish";
import {SwordBill} from "../components/SwordBill";
import {AnimatedFish} from "../components/AnimatedFish";
import AsyncStorage from "@react-native-community/async-storage";
import LottieView from 'lottie-react-native'
import {useIsFocused, useFocusEffect} from '@react-navigation/native'
import Icon from "react-native-vector-icons/Ionicons";

export const HomeScreen = ({navigation, useIsFocused}) => {

    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    const { colors } = useTheme();
    const theme = useTheme();
    const [fishItems, setFishItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isAquarium, setIsAquarium] = useState(true)
    const [aquarium, setAquarium] = useState([{
                isAquarium: false,
                name: '',
                type: '',
                capacity: '',
                date: ''
            }])

    let animate_state = {
        start: 0,
        end: 100
    }

    const value = useRef(new Animated.Value(animate_state.start)).current

    const startAnimate = () => {
        if (animate_state.end) {
            Animated.timing(value, {toValue: animate_state.end, useNativeDriver: false, duration: 500}).start()
            animate_state.start = 100
            animate_state.end = 0
        } else {
            Animated.timing(value, {toValue: animate_state.end, useNativeDriver: false, duration: 500}).start()
            animate_state.start = 0
            animate_state.end = 100
        }
    }

    const inputRange = Object.values(animate_state)
    const height = value.interpolate({ inputRange, outputRange: ['20%', '0%'] })

    const razmer = (screenWidth < (screenHeight - 154) / 5 * 3) ? screenWidth :  (screenHeight - 154) / 5 * 3;

    const raznica = (screenWidth < (screenHeight - 154) / 5 * 3) ? ((screenHeight - 154) / 5 * 3) - screenWidth :  0;

    useFocusEffect(useCallback (() => {
        setIsLoading(false)

      

        setFishItems([])
        animate_state.start = 100
        animate_state.end = 0
        startAnimate()
        setTimeout(async() => {
            try {
                setAquarium([...JSON.parse(await AsyncStorage.getItem('Aquarium'))]);
                  setIsAquarium(true)
        } catch (e) { 
           setIsAquarium(false)
            console.log(e) }

            try {  
                setFishItems([...JSON.parse(await AsyncStorage.getItem('fishItems'))]);
            } catch (e) { console.log(e) }
        }, 0)
        setIsLoading(true)
    }, [useIsFocused]))
    
    return (
        <View  style={styles.container}>
            <StatusBar style={ theme.dark ? "light" : "dark"}/>
            <Image blurRadius={.7} style={{position: 'absolute', width: '100%', height: '100%', flex: 0}}
            source={theme.dark ? require('../components/fonHome20.jpg') : require('../components/fonHome.jpg')}/>

            <View style={{width: '100%', height: 100, backgroundColor: theme.dark ? '#00544D' : '#009387'}}>
                <View style={{paddingHorizontal: 20, flexDirection: "row", marginTop: 55, marginLeft: 10}}>
                <TouchableOpacity onPress={() => {navigation.openDrawer()}} style={{height: '100%', width: 50}}>
                    <Icon name="ios-menu" size={35}  color={'#EEEEEE'}/>
                </TouchableOpacity>
                    
                    <Text style={[styles.sectionTitle, {color: '#EEEEEE', marginTop: -1}]}>{aquarium[0].name}</Text>
                </View>
            </View>

{isLoading ? <View style={{height: screenHeight - 154, width: '100%'}}>
{ !isAquarium ?
      <TouchableOpacity activeOpacity={0.8} onPress={() => {navigation.navigate("CreateAquarium")}}>
<View style={{justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}} >
            <View style={{height: '20%', width: screenWidth - 20, backgroundColor: theme.dark ? '#00544D' : '#009387', borderRadius: 20, margin: 10, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>Создать аквариум</Text>
            </View>
            </View>
              </TouchableOpacity>
             :
             
 <Animated.View  style={ {color: colors.text, textAlign: 'center', height: height}}/> }
        { isAquarium ?    <SvgAquarium/> : null }
    
         <View>
                { 
                     isAquarium ?   fishItems.map((item, index) => {
                        return (
                            (item.ico === "FishClown") ?
                            <AnimatedFish key={index} height={razmer} raznica={raznica}><FishClown /></AnimatedFish>
                            :  (item.ico === "FishBlue") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><FishBlue/></AnimatedFish>
                            :  (item.ico === "FishOrange") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><FishOrange/></AnimatedFish>
                            :  (item.ico === "FishOrange2") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><FishOrange2/></AnimatedFish>
                            :  (item.ico === "ClownLoach") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><ClownLoach/></AnimatedFish>
                            :  (item.ico === "NanoFish") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><NanoFish/></AnimatedFish>
                            :  (item.ico === "SwordBill") ?
                            <AnimatedFish key={index}  height={razmer} raznica={raznica}><SwordBill/></AnimatedFish>
                            : null
                    )} ) : null
                }
            </View>
             { isAquarium ?   <View style={{alignItems: "center"}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {navigation.navigate("FishScreen"); setFishItems([])}}
                                  style={{ position: "absolute",  bottom: screenHeight/30 + 45, left: '85%'}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, width: 40, height: 40,
                        borderRadius: 20, backgroundColor: theme.dark ? '#00544D' : '#009387', lineHeight: 37}}>
                        <FontAwesome5 name="fish" size={20}/></Text>
                </TouchableOpacity>
            </View> : null }
            { isAquarium ? <View style={{alignItems: "center"}}>
                <TouchableOpacity activeOpacity={0.5} onPress={() => {startAnimate()}}
                                  style={{ position: "absolute", bottom: screenHeight/30, left: '85%'}}>
                    <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, width: 40, height: 40,
                        borderRadius: 20, backgroundColor: theme.dark ? '#00544D' : '#009387', lineHeight: 37}}>
                        <FontAwesome5 name="info" size={20}/></Text>
                </TouchableOpacity>
            </View> : null }
            <Animated.View  style={ {color: colors.text, textAlign: 'center',height: height}}/>
               { isAquarium ?   <Animatable.View animation="fadeInUpBig" style={[styles.footer, {
                    backgroundColor: colors.backgroundOpacity   }]} >
                    <Text style={[styles.text_footer, {color: "white", borderBottomColor: colors.text,
                        borderBottomWidth: 1, marginBottom: 10, paddingBottom: 10, textAlign: 'center'}]}
                         onPress={() => {navigation.navigate("CreateAquarium")}}  >Информация об аквариуме</Text>
                    <ScrollView>
                        <View style={styles.section}>
                            <Caption style={[styles.caption, {color: "#9B9B9B", width: 110, marginRight: 10}]}>Название</Caption>
                            <Paragraph style={[styles.paragraph, styles.caption, {color: "white"}]}>{aquarium[0].name/*Мой аквариум*/}</Paragraph>
                        </View>
                        <View style={styles.section}>
                            <Caption style={[styles.caption, {color: "#9B9B9B", width: 110, marginRight: 10}]}>Тип</Caption>
                            <Paragraph style={[styles.paragraph, styles.caption, {color: "white"}]}>{aquarium[0].type/*Пресноводный аквариум*/}</Paragraph>
                        </View>
                        <View style={styles.section}>
                            <Caption style={[styles.caption, {color: "#9B9B9B", width: 110, marginRight: 10}]}>Вместимость</Caption>
                            <Paragraph style={[styles.paragraph, styles.caption, {color: "white"}]}>{aquarium[0].capacity/*100*/}{ aquarium[0].capacity === '' ? null : 'литров'} </Paragraph>
                        </View>
                        <View style={styles.section}>
                            <Caption style={[styles.caption, {color: "#9B9B9B", width: 110, marginRight: 10}]}>Дата запуска</Caption>
                            <Paragraph style={[styles.paragraph, styles.caption, {color: "white"}]}>{aquarium[0].date/*02-03-2021*/}</Paragraph>
                        </View>
                    </ScrollView>
                </Animatable.View> : null }
                </View>: null }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        flex: 1,
        backgroundColor: 'rgba(233,234,236, 0.8)',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
});
