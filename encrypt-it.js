/*
 * Starter file 
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  const encryptButton = document.querySelector("#encrypt-it");
  const text = document.querySelector("#input-text");
  const result = document.querySelector("#result");
  const resetButton = document.querySelector("#reset");



  /**
   * TODO: Write a function comment using JSDoc.
   */
  /** When the window is loaded it creates 2 event listeners  */
  function init() {
    encryptButton.addEventListener('click', handleClick);
    resetButton.addEventListener('click', handleReset);
    console.log("Window loaded!");
    console.log('loaded');
  }

  function handleClick(e) {
    console.log("Button Clicked");
    const newVal = shiftCipher(text.value);

    result.innerHTML = newVal;
  }

  function handleReset() {
    result.innerHTML = "";
    text.value = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else {
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }
    return result;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

})();
