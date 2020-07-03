export  default {
  component: {

    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',

},
header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5
},
arrowButton: {
    paddingHorizontal: 10
},
title: {
    color: 'grey',
    fontSize: 20,
    fontFamily: 'coolvetica',
},
week: {
    width: '100%',
    borderBottomColor: 'orange',
    paddingVertical: 5
},
weekdayLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
},
weekdayLabel: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EB6012'
},
weekdayLabelText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'coolvetica',

},
weekdayNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,

},
weekDayNumber: {
    flex: 1,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
},
weekDayNumberCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 30/2,
},
weekDayNumberTextToday : {
    color: 'white'
},
schedule: {
    width: '100%'
},
pickerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white'
},
picker: {
    backgroundColor: 'white',
    paddingBottom: 20
},
modal: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
},
blurredArea: {
    flex: 1,
    opacity: 0.7,
    backgroundColor: 'black'
},
modalButton: {
    padding: 15
},
modalButtonText: {
    fontSize: 20
},
indicator: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EB6012',
    position: 'absolute'
},
day: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderTopColor: '#EB6012',
    fontSize: 20,
    fontFamily: 'coolvetica',


},
dayLabel: {
    width: '20%',
    alignItems: 'center',
    padding: 10,
      borderColor: 'black'


},
dayText: {
  fontSize: 20,
  fontFamily: 'coolvetica',
  color: 'black',

},
allEvents: {
    width: '80%',
},
event: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderColor: 'black'
},
eventDuration: {
    width: '30%',
    justifyContent: 'center'
},
durationContainer: {
    flexDirection: 'column',
    alignItems: 'center'
},
durationDot: {
    width: 4,
    height: 4,
    backgroundColor: 'grey',
    marginRight: 5,
    alignSelf: 'center',
    borderRadius: 4/2,
},
durationDotConnector: {
    height: 20,
    borderLeftColor: 'grey',

    position: 'absolute',
    left: 2
},
durationText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'coolvetica',
},
eventNote: {
    fontSize: 20,
},
lineSeparator: {
    width: '100%',
    borderBottomColor: 'lightgrey',

},
dot: {
    width: 4,
    height: 4,
    marginTop: 1,
    alignSelf: 'center',
    borderRadius: 4/2,
    position: 'absolute',
    bottom: '10%'
}
}
