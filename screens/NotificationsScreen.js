import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch, Dimensions, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";
import Notifications from '../model/Notifications';
import {useTheme} from "@react-navigation/native";
import PushNotification from "react-native-push-notification";
import{ DataPicker }from './DataPicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export const NotificationsScreen = ({ navigation}) => {

PushNotification.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
    },
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
});


const showNotificationShedule = (title, message, index, date, id, chanel) => {
    PushNotification.createChannel(
      {
        channelId: chanel,
        channelName: chanel,
        channelDescription: "A chanel to categorise your notifications",
        playSound: false,
        soundName: "default",
        importance: 4,
        vibrate: true,
      }
    )

    PushNotification.localNotificationSchedule(
       {
           id: id,
           channelId: chanel,
           title: title,
           message: message,
           vibrate: true,
           vibration: 300,
           soundName: "default",
           date: date,
           allowWhileIdle: true,
        //   repeatType: "day"
        }
    )
}

const showNotification = (title, message, index) => {
    PushNotification.createChannel(
      {
        channelId: "com.aquascope",
        channelName: "com.aquascope",
        channelDescription: "A chanel to categorise your notifications",
        playSound: false,
        soundName: "default",
        importance: 4,
        vibrate: true,
      }
    )

    PushNotification.localNotification({
      channelId: "com.aquascope2",
      title: title,
      message: message,
      vibrate: true,
      vibration: 300,
      soundName: "default",
    })
}

    const { colors } = useTheme();
    const screenWidth = Dimensions.get('screen').width;
    const screenHeight = Dimensions.get('screen').height;
    const [listData, setListData] = useState(
       [
            {
                key: 1,
                title: 'Покормить рыбок',
                active: false,
                notification: 'Пора корминть рыбок'
            },
            {
                key: 2,
                title: 'Почистить аквариум',
                active: false,
                notification: 'Пора чистить аквариум'
            },
            {
                key: 3,
                title: 'Поменять воду в аквариуме',
                active: false,
                notification: 'Пора менять воду в аквариуме'
            }
        ])

        const [active, setActive] = useState(false)

    const toggleNotification = (index) => {
        setActive(data => !data)
        if(listData[index].active){
            //showNotification("Оповещение выключено", listData[index].title, index)
            PushNotification.cancelLocalNotifications({id: listData[index].key});
        }
        else{
            setId(index)
            /*let date = new Date(Date.now())
            
            let hours = 13 - date.getHours();
            let min = 59 - date.getMinutes();
            let sec = 60 - date.getSeconds();

            date = new Date(Date.now() + (hours * 3600 + min * 60 + sec) * 1000)
            let chanel = "com.aquascope" + listData[index].key
            showNotificationShedule("Оповещение установлено", listData[index].title, index, date, listData[index].key, chanel)*/
        }
           
        let data = listData;
        data[index].active = !data[index].active;
        setListData(data)
    }


const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setTimePickerVisibility(true)
  };

   const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const [day, setDay] = useState()
  const [id, setId] = useState()
  
  const handleConfirm = (date) => {
   // console.warn("A date has been picked: ", date);
    hideDatePicker();
    setDay(date);
  };


  const handleTimeConfirm = (date) => {
   // console.warn("A time has been picked: ", date);
    hideTimePicker();


            
    let a = new Date()
    let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
    let utc2 = Date.UTC(day.getFullYear(), day.getMonth(), day.getDate(), date.getHours(), date.getMinutes(), 0);
    
    
    //console.warn(utc2 - utc1);
    
    
    let date2
     date2  = new Date(Date.now() + utc2 - utc1) 
    let chanel = "com.aquascope" + listData[id].key
    showNotificationShedule("Оповещение", listData[id].title, id, date2, listData[id].key, chanel)
  };

    return (
        <View style={[styles.container, {marginTop: 50}]}>

<DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />

<DateTimePickerModal
isVisible={isTimePickerVisible}
  mode="time"
  locale="RU" // Use "en_GB" here
  date={new Date()}
  onConfirm={handleTimeConfirm}
  onCancel={hideTimePicker}
/>


            <View style={{  paddingHorizontal: 20, paddingBottom: 0, flexDirection: "row"}}>
                <Icon.Button name="ios-menu" size={35}  color={colors.text} backgroundColor={colors.background} onPress={() => {
                    navigation.openDrawer()}}  />
                    <Text style={[styles.sectionTitle, {color: colors.text, marginTop: 6}]}>Оповещения</Text>
            </View>

            
      
      
   

            <View style={styles.tasksWrapper}>
            {
                listData.map((data, index) => {
                    return (
                        <View style={[styles.item, {backgroundColor: colors.background2}]} key={data.key}>
                            <TouchableOpacity onPress={() => { toggleNotification(index); if(data.active)showDatePicker();}}>
                                <View style={{flexDirection: 'row',  alignItems: 'center', justifyContent: 'space-between',}}>
                                    <View style={[styles.itemLeft, {flexDirection: 'row'}]}>
                                        <View style={[styles.square]}>
                                            <MaterialCommunityIcons name="bell-ring-outline" size={26} color={colors.text}/>
                                        </View>
                                        <Text style={[styles.itemText, {width: screenWidth - 140, color: '#899FFE'/*'#1f65ff'*/, fontWeight: 'bold', fontSize: 18}]}>{data.title}</Text>
                                  
                                    <View pointerEvents="none">
                                       <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={data.active ? '#899FFE' : "#f4f3f4"}
            value={data.active}
            
       
          />
                                   </View>


                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    );
                 })

            }
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tasksWrapper: {
        marginTop: 15,
        paddingHorizontal: 10,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    item: {
        padding: 15,
        borderRadius: 20,
        marginBottom: 20,
        top: 5
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        marginRight: 15,
    },
    rowBack: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        margin: 5,
        marginBottom: 15,
        borderRadius: 20,
    },
    backRightBtn: {
        alignItems: 'flex-end',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,

        paddingRight: 17,
    },
    backRightBtnLeft: {
        backgroundColor: '#1f65ff',
        right: 76,
        width: 150,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        width: 75,
        right: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    trash: {
        height: 25,
        width: 25,
        marginRight: 7,
    }
});