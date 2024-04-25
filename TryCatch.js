setTimeout(function () {
    try {
        noSuchVariable;
    } catch {
        console.log("error is caught here!");
    }
}, 1000);

try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (err) {
    console.log( "won't work" );
  }