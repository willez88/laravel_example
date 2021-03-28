<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es';

export default {

    components: {
        FullCalendar // make the <FullCalendar> tag available
    },

    data: function() {
        return {
            record: {
                title: '',
                start: '',
                end: '',
                allDay: '',
            },
            errors: [],
            calendarOptions: {
                //locale: esLocale,
                plugins: [
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin // needed for dateClick
                ],
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                initialView: 'dayGridMonth',
                editable: true,
                selectable: true,
                selectMirror: true,
                dayMaxEvents: true,
                weekends: true,
                select: this.handleDateSelect,
                eventClick: this.handleEventClick,
                eventsSet: this.handleEvents,
                eventSources: {
                    url: 'http://localhost:8000/events'
                },
                eventResize: this.eventResize,
                eventDrop: this.eventDrop
                /* you can update a remote database when these fire:
                eventAdd:
                eventChange:
                eventRemove:
                */
            },
            currentEvents: []
        }
    },

    methods: {

        handleWeekendsToggle() {
            this.calendarOptions.weekends = !this.calendarOptions.weekends // update a property
        },

        handleDateSelect(selectInfo) {
            this.record.title = prompt('Título del evento: ')
            this.record.start = selectInfo.start;
            this.record.end = selectInfo.end;
            this.record.allDay = selectInfo.allDay;
            let calendarApi = selectInfo.view.calendar;
            calendarApi.unselect(); // clear date selection
            if (this.record.title) {
                axios.post('events', this.record).then(response => {
                    calendarApi.addEvent({
                        id: response.data.record.id,
                        title: response.data.record.title,
                        start: response.data.record.start,
                        end: response.data.record.end,
                        allDay: response.data.record.allDay
                    })
                });
                //this.createRecord('/events');
                /*calendarApi.addEvent({
                    title: this.record.title,
                    start: this.record.start,
                    end: this.record.end,
                    allDay: this.record.allDay
                })*/
            }
        },

        handleEventClick(clickInfo) {
            if (confirm(`¿Está seguro que quiere eliminar el evento '${clickInfo.event.title}'`)) {
                axios.delete(`${'/events/'}${clickInfo.event.id}`).then(response => {
                    clickInfo.event.remove();
                });
            }
        },

        handleEvents(events) {
            this.currentEvents = events;
        },

        eventDrop(event) {
            console.log(event);
        },

        eventResize(event) {
            console.log(event.event);
            alert(event.event.id);
        },
    },
}
</script>

<template>
    <div class='demo-app'>
        <div class='demo-app-sidebar'>
            <div class='demo-app-sidebar-section'>
                <h2>Instructions</h2>
                <ul>
                    <li>Select dates and you will be prompted to create a new event</li>
                    <li>Drag, drop, and resize events</li>
                    <li>Click an event to delete it</li>
                </ul>
            </div>
            <div class="alert alert-danger" v-if="errors.length > 0">
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </div>
            <div class='demo-app-sidebar-section'>
                <label>
                    <input
                    type='checkbox'
                    :checked='calendarOptions.weekends'
                    @change='handleWeekendsToggle'
                    />
                    toggle weekends
                </label>
            </div>
            <div class='demo-app-sidebar-section'>
                <h2>All Events ({{ currentEvents.length }})</h2>
                <ul>
                    <li v-for='event in currentEvents' :key='event.id'>
                        <b>{{ event.startStr }}</b>
                        <i>{{ event.title }}</i>
                    </li>
                </ul>
            </div>
        </div>
        <div class='demo-app-main'>
            <FullCalendar
            class='demo-app-calendar'
            :options='calendarOptions'
            >
            <template v-slot:eventContent='arg'>
                <b>{{ arg.timeText }}</b>
                <i>{{ arg.event.title }}</i>
            </template>
            </FullCalendar>
        </div>
    </div>
</template>

<style lang='css'>

h2 {
    margin: 0;
    font-size: 16px;
}

ul {
    margin: 0;
    padding: 0 0 0 1.5em;
}

li {
    margin: 1.5em 0;
    padding: 0;
}

b { /* used for event dates/times */
    margin-right: 3px;
}

.demo-app {
    display: flex;
    min-height: 100%;
    font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
    font-size: 14px;
}

.demo-app-sidebar {
    width: 300px;
    line-height: 1.5;
    background: #eaf9ff;
    border-right: 1px solid #d3e2e8;
}

.demo-app-sidebar-section {
    padding: 2em;
}

.demo-app-main {
    flex-grow: 1;
    padding: 3em;
}

.fc { /* the calendar root */
    max-width: 1100px;
    margin: 0 auto;
}

</style>
