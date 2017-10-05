function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}

// ---- North ----

// gov cent -- Wyn Walls --> 2 Miles / 40 mph

// wyn walls -- Bvista blvd --> 0.9 miles / 28 mph

// Bvis blvd -- des dis --> 0.4 miles / 12 mph


// ---- South ----


// Dade south -- the Falls --> 70 mph

// The falls -- Jack south --> 36 mph

// Jack South -- West Perrine --> 46 mph

// West Perrine -- zoo --> 96 mph

// ---> 62 MPH AVERAGE
