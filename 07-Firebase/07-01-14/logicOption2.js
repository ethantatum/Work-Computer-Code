$(document).ready(function () {
    // Initialize Firebase
    // Make sure to match the configuration to the script version number in the HTML
    // (Ex. 3.0 != 3.7.0)
    let firebaseConfig = {
        apiKey: "AIzaSyC_E-vSwo0H2kNJ7N3SgojuPiTXa1JmBzY",
        authDomain: "fireintro2-b995f.firebaseapp.com",
        databaseURL: "https://fireintro2-b995f.firebaseio.com",
        projectId: "fireintro2-b995f",
        storageBucket: "fireintro2-b995f.appspot.com",
        messagingSenderId: "998248438977",
        appId: "1:998248438977:web:d7f16a133f4430f9150840"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // Assign the reference to the database to a variable named 'database'
    let database = firebase.database();

    // connectionsRef references a specific location in our database
    // ALL our connections will be stored in this directory
    let connectionsRef = database.ref("/connections");

    // ".info/connected" is a special location provided by Firebase that is updated every time the client's connection state changes
    //  it is a boolean value - true if the client is connected, false if they are not
    let connectedRef = database.ref(".info/connected");

    // when the client's connection state changes
    connectedRef.on("value", function(snapshot) {
        // if they are connected
        if(snapshot.val()) {
            // add them to the connections list
            let connected = connectionsRef.push(true);

            // Remove them from the connections list when they disconnect
            connected.onDisconnect().remove();
        }
    });

    // On load or when connections list changes
    connectionsRef.on("value", function(snapshot) {
        if(snapshot.numChildren() === 1) {
            $("#watching").text(`There is ${snapshot.numChildren()} person watching this auction.`);
        } else {
        $("#watching").text(`There are ${snapshot.numChildren()} people watching this auction.`);
        }
    });

    // Initial Values
    let initialBid = 0;
    let initialBidder = "No one :-(";
    let highPrice = initialBid;
    let highBidder = initialBidder;

    // --------------------------------------------------------------

    //  At the page load and subsequent value changes, get a snapshot of the stored data.
    // This function allows you to update your page in real-time when the firebase database changes.
    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());

        // If Firebase has a highPrice and highBidder stored (first case)
        if (snapshot.child("highPrice").exists() && snapshot.child("highBidder").exists()) {

            // Set the variables for highBidder/highPrice equal to the stored values in firebase.
            highPrice = parseInt(snapshot.val().highPrice);
            highBidder = snapshot.val().highBidder;

            // Change the HTML to reflect the stored values
            $("#highest-bidder").text(highBidder);
            $("#highest-price").text(`$${highPrice}`);

            // Print the data to the console.
            console.log(snapshot.val().highPrice);
            console.log(snapshot.val().highBidder);


        } else {
            // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.

            // Change the HTML to reflect the initial values
            $("#highest-bidder").text(highBidder);
            $("#highest-price").text(`$${highPrice}`);

            // Print the data to the console.
            console.log(snapshot.val().highPrice);
            console.log(snapshot.val().highBidder);
        }
    }, function (error) {
        console.error(error.code);
    });


    // --------------------------------------------------------------

    // Whenever a user clicks the submit-bid button
    $("#submit-bid").on("click", function (event) {
        // prevent form from submitting with event.preventDefault() or returning false
        event.preventDefault();

        let inputBidder;
        let inputBid;

        if (($("#bidder-name").val() === ``) || ($("#bidder-price").val() === ``)) {
            alert(`You must fill out all fields before submitting a bid.`);
        } else {
            // Get the input values
            inputBidder = $("#bidder-name").val().trim();
            inputBid = parseInt($("#bidder-price").val().trim());
            // Log the Bidder and Price (Even if not the highest)
            console.log(inputBidder);
            console.log(inputBid);

            // If Then statements to compare against previous high bidder
            if (inputBid > highPrice) {

                // Alert that they are High Bidder
                alert(`Congratulations - you are now the highest bidder!`);

                // Save the new price in Firebase
                database.ref().set({
                    highPrice: inputBid,
                    highBidder: inputBidder
                });

                // Log the new High Price
                console.log(`New high bidder is ${inputBidder} with a bid of $${inputBid}.`);

                // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
                highPrice = inputBid;
                highBidder = inputBidder;

                // Change the HTML to reflect the new high price and bidder
                $("#highest-bidder").text(highBidder);
                $("#highest-price").text(`$${highPrice}`);
            } else {
                // Else tell user their bid was too low via alert
                alert(`Sorry, $${inputBid} isn't high enough - try bidding again.`);
            }

        }
    });
});