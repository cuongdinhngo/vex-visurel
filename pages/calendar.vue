<template>
  <v-container class="wrapper" fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <!-- Header content can go here -->
      </v-col>
    </v-row>
  </v-container>

  <v-container class="calendar-container" fluid>
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <FullCalendar
            :options="calendarOptions"
            ref="fullCalendar"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

// Reactive data
const fullCalendar = ref(null)
const showAddEventDialog = ref(false)
const showEventDetailsDialog = ref(false)
const eventFormValid = ref(false)
const selectedEvent = ref(null)
const selectedDate = ref(null)

const events = ref([
  {
    id: '1',
    title: 'Team Meeting',
    start: '2025-06-11T09:00:00',
    end: '2025-06-11T10:00:00',
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    extendedProps: {
      description: 'Weekly team sync meeting',
      category: 'meeting'
    }
  },
  {
    id: '2',
    title: 'Project Deadline',
    start: '2025-06-15',
    allDay: true,
    backgroundColor: '#F44336',
    borderColor: '#F44336',
    extendedProps: {
      description: 'Final delivery for client project',
      category: 'deadline'
    }
  },
  {
    id: '3',
    title: 'Code Review',
    start: '2025-06-13T14:00:00',
    end: '2025-06-13T15:30:00',
    backgroundColor: '#FF9800',
    borderColor: '#FF9800',
    extendedProps: {
      description: 'Review pull requests from team',
      category: 'review'
    }
  },
  {
    id: '4',
    title: 'Coding',
    start: '2025-06-11T09:00:00',
    end: '2025-06-13T06:00:00',
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
    extendedProps: {
      description: 'Implement new features for the project',
      category: 'development'
    }
  },
])

const calendarHeaderOptions = reactive({
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
});

// FullCalendar options
const calendarOptions = reactive({
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay'
  },
  initialView: 'dayGridMonth',
  selectable: true,
  selectMirror: true,
  dayMaxEvents: true,
  weekends: true,
  events: events.value,
  height: 'auto',
  eventClick: handleEventClick,
  dateClick: handleDateClick,
  select: handleDateSelect,
  eventDrop: handleEventDrop,
  eventResize: handleEventResize,
  // Vuetify theme integration
  themeSystem: 'standard',
  eventColor: '#1976D2',
  eventTextColor: '#FFFFFF'
})

// Event handlers
function handleEventClick(clickInfo) {
  selectedEvent.value = clickInfo.event
  showEventDetailsDialog.value = true
}

function handleDateClick(dateClickInfo) {
  selectedDate.value = dateClickInfo.dateStr
  // Format datetime for datetime-local input
  const startDate = new Date(dateClickInfo.date)
  startDate.setHours(9, 0, 0, 0)
  const endDate = new Date(dateClickInfo.date)
  endDate.setHours(10, 0, 0, 0)
  
  newEvent.start = formatDateTimeLocal(startDate.toISOString())
  newEvent.end = formatDateTimeLocal(endDate.toISOString())
  showAddEventDialog.value = true
}

function handleDateSelect(selectInfo) {
  selectedDate.value = selectInfo.startStr
  newEvent.start = formatDateTimeLocal(selectInfo.start)
  newEvent.end = formatDateTimeLocal(selectInfo.end)
  newEvent.allDay = selectInfo.allDay
  showAddEventDialog.value = true
}

function handleEventDrop(dropInfo) {
  // Handle drag and drop
  updateEvent(dropInfo.event)
}

function handleEventResize(resizeInfo) {
  // Handle event resize
  updateEvent(resizeInfo.event)
}
</script>

<style>
.wrapper {
  background: url('/images/landscape.jpg') no-repeat center;
  background-size: cover;
  min-height: 200px;
  position: relative;
  margin-bottom: 0;
}

.calendar-container {
  position: relative;
  top: -82px;
  z-index: 10;
}

@media (max-width: 960px) {
  .calendar-container {
    top: -124px;
  }
}

.fc .fc-button .fc-icon {
  vertical-align: top !important;
}
</style>