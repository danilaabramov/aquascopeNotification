import React, { Component, useEffect } from 'react';
import {Text,View} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage";



  class ClockOfFood extends Component {//таймер кормления рыбок
    constructor(props){
      super(props);
      this.state={
        sec: 0,
        state: this.props.data[this.props.index].active
      };
    }

  componentDidMount(){//вызывается после рендера компонента
  this.tick()
  this.timerID = setInterval(
    ()=> this.tick(),1000
  )
  }
  componentWillUnmount(){//вызывается в случае удаления компонента
  clearInterval(this.timerID);
  }

  componentDidUpdate() {
    if(this.state.state != this.props.data[this.props.index].active){
      this.tick()
      this.setState({
      state: this.props.data[this.props.index].active
    })  
    }
 }
  
  tick = () => {//фукнция одного такта

  if(this.props.data[this.props.index].active){
    let d = this.props.notif;
    let a = new Date(Date.now())
    let utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds());
    let utc2 = Date.UTC(d[this.props.index].year, d[this.props.index].month, d[this.props.index].day, d[this.props.index].hour, d[this.props.index].min, d[this.props.index].sec);
    let seconds = Math.floor((utc2 - utc1) / 1000)
    seconds += (Math.abs(Math.floor(seconds / this.props.time))) * this.props.time
    this.setState({
      sec: seconds
    })  
  }
  else
  this.setState({
      sec: 0
    })

  }
  render(){ //рендер элемента
    const sec = this.state.sec
    const days = Math.floor(sec / 3600 / 24)
    const hour = Math.floor(sec % (3600 * 24) / 3600)
    const min = Math.floor((sec % 3600) /60)
    const secs =this.state.sec % 60;
    return(
      <Text style = {{color: this.props.color, fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>{days} д : {hour} ч : {min} м: {secs} с</Text>
    )
  }
  }

  export {ClockOfFood}
