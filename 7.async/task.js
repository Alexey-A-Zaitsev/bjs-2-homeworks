class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(time === undefined || time === null || callback  === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        if(this.alarmCollection.some(alarm => alarm.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        };

        let alarm = {
            callback: callback,
            time: time,
            canCall: true
        };

        this.alarmCollection.push(alarm);

        
    };

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    };
    
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0, -3);
    };

    start() {
        if(!this.intervalId) {   
            this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
            if(alarm.time === this.getCurrentFormattedTime()  &&  alarm.canCall == true)  {
                alarm.canCall = false;
                alarm.callback();
            }
            }), 1000);
        };
    };
      
    stop()  {
        clearInterval(this.intervalId);
          this.intervalId = null;     
    };
  
    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    };
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
  
}