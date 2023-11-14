// Another approach but no recommend to use
/*
document.getElementById('owl').onclick = function () {
  alert("Owl Clicked");
};
*/

// attachEvent()
// jQuery - on

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keycode

/*
// Best Approach
document.getElementById("images").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    console.log("Clicked inside the ul");
    // alert("Owl Clicked Again");
    // e.stopPropagation();
  },
  true
);
document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    // console.log(e);
    // alert("Owl Clicked Again");
    console.log("Owl Clicked");
    e.stopPropagation(); // it will stop bubbling
  },

  true
);
*/

// Event Propagation - Bubbling - Inside to outside - When bothe are false - By default it is false
// Event Propagation - Capturing - Outside to Inside - When both are true

/*
document.getElementById("google").addEventListener(
  "click",
  function (e) {
    e.preventDefault(); // by default when we click google, it direct us to google.com. but if we don't want to get directed we can use preventDefault()
    e.stopPropagation();
    console.log("Google Clicked");
  },
  false
);
*/

// Real World Project
// When we will clik on image it will hide

/*
document.querySelector("#images").addEventListener(
  "click",
  function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.parentNode);
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        console.log(e.target.id)
        let removeIt = e.target.parentNode;
        //  1sr approach to remove element
        removeIt.remove();
    
        //  2nd approach to remove element
        // removeIt.parentNode.removeChild(removeIt);
    }
  },
  false
);
*/
