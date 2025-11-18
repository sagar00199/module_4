// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function (window) {
  // STEP 7: Create an object, called 'byeSpeaker'
  var byeSpeaker = {};

  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  // STEP 8: Attach the 'speak' function to the byeSpeaker object
  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // STEP 9: Expose the 'byeSpeaker' object to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);
