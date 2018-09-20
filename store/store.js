let store = {
    state: {
    timeslots: [],
    week: []
    },
    mutations: {
        setTimeslots(payload) {
            store.state.timeslots = [];
            store.state.timeslots.push(payload);
        }, 
        removeTimes(index) {
            store.state.timeslots[0].splice(index, 1);
        }, 
        addWeek (payload) {
            store.state.week.push(payload);
        }

    },
    getters: {
        getTimeslots() {
            return store.state.timeslots[0];
        }
    }
}
module.exports = store;