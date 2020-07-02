// =================== MENU BURGER 
// $(".menu-1").click(function () {
//     $(this).toggleClass("open");
// });

// document.getElementById('toggle').click(function (e) {
//     e.target.toggleClass("open");
// })

// const checkboxList = document.querySelectorAll("input[type='checkbox']")

// console.log(checkboxList)
// console.log(checkboxList[1].checked)

// for (let checkbox in checkboxList) {
//     console.log('this is the ele', check.checked)
// }




// ================ MAP ============================

function initMap() {
    // Map options
    var options = {
        zoom: 16,
        center: { lat: -20.3159415, lng: -40.291667 }
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function (event) {
        // Add marker
        addMarker({ coords: event.latLng });
    });


    // Array of markers
    var markers = [
        {
            coords: { lat: -20.3159415, lng: -40.291667 },
            iconImage: 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png',
            content: '<h1>Orbit Geo</h1>'
        },
        // {
        //     coords: { lat: 42.8584, lng: -70.9300 },
        //     content: '<h1>Amesbury MA</h1>'
        // },
        // {
        //     coords: { lat: 42.7762, lng: -71.0773 }
        // }
    ];

    // Loop through markers
    for (var i = 0; i < markers.length; i++) {
        // Add marker
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon:props.iconImage
        });

        // Check for customicon
        if (props.iconImage) {
            // Set icon image
            marker.setIcon(props.iconImage);
        }

        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }
    }
}