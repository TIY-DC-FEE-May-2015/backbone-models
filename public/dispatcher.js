var EventDispatcher = _.clone(Backbone.Events)

/*
  Creates a generic object literal. It should have several properties:

  - counter: should start at 0
  - switch: should start as false
  - amplify: should be a function that doesnt do anything ("no-op")
*/
var dataObject = {
  counter: 0,
  switch: false,
  amplify: function() {}
}


/* ---------
  Write code that listens to the "addition" event on the EventDispatcher
  It adds 1 to the dataObject.counter property
--------- */

/* TODO */
var addition = EventDispatcher.on("addition", function() {
  dataObject.counter += 1
})

/* ---------
  Write code that listens to the "flick" event on the EventDispatcher
  It changes the value of dataObject.switch..
    If true, becomes false
    If false, becomes true
--------- */

/* TODO */
var flick = EventDispatcher.on("flick", function() {
  console.log(dataObject.switch)
  if( dataObject.switch === false) {
    dataObject.switch = true
  }
  else {
    dataObject.switch = false
  }

})

/* ---------
  Write code that listens to the "siren" event on the EventDispatcher
  It executes the dataObject.amplify function
--------- */

/* TODO */
var siren = EventDispatcher.on("siren", function () {
  dataObject.amplify()
})

/* ---------
  Write code that listens to the "change-amplify" event on the EventDispatcher
  It changes the dataObject.amplify property to the value passed in
    via the event's parameter
--------- */

/* TODO */
var changeAmplify = EventDispatcher.on("change-amplify", function(evt) {
  dataObject.amplify = evt
})


