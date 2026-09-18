// ================= TRACK BUS =================

const trackBtn = document.querySelector(".track-btn");

trackBtn.addEventListener("click", function () {

    document.getElementById("tracking").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= VIEW ROUTES =================

const routeBtn = document.querySelector(".route-btn");

routeBtn.addEventListener("click", function () {

    document.getElementById("routes").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= CURRENT LOCATION =================

const locationBtn = document.querySelector(".tracking-card button");

locationBtn.addEventListener("click", function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                alert(
                    "Your current location:\n\n" +
                    "Latitude: " + latitude +
                    "\nLongitude: " + longitude
                );

            },

            function () {

                alert("Location permission denied.");

            }

        );

    } else {

        alert("Geolocation is not supported by your browser.");

    }

});


// ================= NAVIGATION LINKS =================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            link.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= LOGIN POPUP =================

function openLogin() {

    document.getElementById("loginPopup").style.display = "flex";

}


function closeLogin() {

    document.getElementById("loginPopup").style.display = "none";

}


function loginUser(event) {

    event.preventDefault();

    const name = document.getElementById("userName").value;

    const bus = document.getElementById("busNumber").value;

    alert(
        "Welcome " + name +
        "!\nBus Number: " + bus
    );

    closeLogin();

}


// ================= BUS ROUTE SELECTION =================

const busSelect = document.getElementById("busSelect");

const routeResult = document.getElementById("routeResult");

const routeText = document.getElementById("routeText");


busSelect.addEventListener("change", function () {

    const selectedBus = busSelect.value;


    if (selectedBus === "bus1") {

        routeResult.style.display = "block";

        routeText.innerHTML =
            "🚌 Bus 81<br>" +
            "📍 Needur → Karaikal → College";

    }


    else if (selectedBus === "bus2") {

        routeResult.style.display = "block";

        routeText.innerHTML =
            "🚌 Bus 71<br>" +
            "📍 Semabanarkovil → Karaikal → College";

    }


    else if (selectedBus === "bus3") {

        routeResult.style.display = "block";

        routeText.innerHTML =
            "🚌 Bus 80<br>" +
            "📍 Poombuhar → Karaikal → College";

    }


    else if (selectedBus === "bus4") {

        routeResult.style.display = "block";

        routeText.innerHTML =
            "🚌 Bus 82<br>" +
            "📍 Mailaduthurai → Arumbakam → College";

    }


    else if (selectedBus === "bus5") {

        routeResult.style.display = "block";

        routeText.innerHTML =
            "🚌 Bus 65<br>" +
            "📍 Mayiladuthurai → Nalladai → College";

    }


    else {

        routeResult.style.display = "none";

    }

});


const trackBusSelect = document.getElementById("trackBusSelect");
const startTrackingBtn = document.getElementById("startTrackingBtn");

const trackingResult = document.getElementById("trackingResult");

const selectedBusName = document.getElementById("selectedBusName");
const busLocation = document.getElementById("busLocation");
const busRoute = document.getElementById("busRoute");
const busETA = document.getElementById("busETA");


startTrackingBtn.addEventListener("click", function () {

    const selectedBus = trackBusSelect.value;

    if (selectedBus === "") {

        alert("Please select a bus number.");

        return;
    }


    // Bus 01
    if (selectedBus === "bus1") {

        selectedBusName.textContent = "Bus 81";

        busLocation.textContent = "Attur";

        busRoute.textContent = "Mayiladuthurai → Karaikal → College";

        busETA.textContent = "15 minutes";

    }


    // Bus 02
    else if (selectedBus === "bus2") {

        selectedBusName.textContent = "Bus 71";

        busLocation.textContent = "Guindy";

        busRoute.textContent = "Chennai → Guindy → College";

        busETA.textContent = "20 minutes";

    }


    // Bus 03
    else if (selectedBus === "bus3") {

        selectedBusName.textContent = "Bus 80";

        busLocation.textContent = "Tambaram";

        busRoute.textContent = "Tambaram → Chromepet → College";

        busETA.textContent = "12 minutes";

    }


    // Bus 04
    else if (selectedBus === "bus4") {

        selectedBusName.textContent = "Bus 82";

        busLocation.textContent = "Velachery";

        busRoute.textContent = "Velachery → Adambakkam → College";

        busETA.textContent = "18 minutes";

    }


    // Bus 05
    else if (selectedBus === "bus5") {

        selectedBusName.textContent = "Bus 65";

        busLocation.textContent = "Avadi";

        busRoute.textContent = "Avadi → Ambattur → College";

        busETA.textContent = "25 minutes";

    }


    
    trackingResult.style.display = "block";

});