let moment = require('moment-timezone');

let computed = {
    week: function () {
        let today = moment().format('MM-DD-YYYY');
        let start = moment().add(1, 'd');
        let aWeekFromStart = moment().add(8, 'd');
        let week = [];
        while (start.isBefore(aWeekFromStart)) {
            let formattedDay = start.format('YYYY-MM-DD')
            week.push(formattedDay);
            start.add(1, 'd');
        }
        return week;
    },
    getHours: function (datesObject) {
        let week = this.week();
        let timesHours = [];
        week.forEach(weekday => {
            datesObject.forEach(day => {
                if (weekday === day.day) {
                    day.Events.forEach(event => {
                        if (event.event === 'open') {
                            let day = event.DayDay;
                            let openTime = event.start;
                            let closeTime = event.end;
                            timesHours.push({
                                day: day,
                                open: openTime, 
                                close: closeTime
                            })
                        }
                    })
                }
            })
        })
        this.getAvailable(timesHours)
    },
    getAvailable: function(hours) {
        let dayOne = hours[0];
        let open = moment.tz(dayOne.open, 'utc');
        let close = moment.tz(dayOne.close, 'utf');
        let timeslot = open;
        let timeslotArr = [];
        // console.log('HOURS', open, close)
        // console.log('add', timeslot.add(30, 'm'))

        while (timeslot.isBefore(close)) {
            let currentTimeSlot = timeslot;
            timeslotArr.push(currentTimeSlot);
            timeslot.add(30, 'm')
        }

        console.log('timeslotarr', timeslotArr)
    }
}

module.exports = computed;