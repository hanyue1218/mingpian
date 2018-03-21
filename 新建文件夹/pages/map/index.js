// pages/Map/index.js
Page({
  data: {
    markers: [{
      iconPath: "/pages/images/map.png",
      id: 0,
      latitude: 38.0285000000,
      longitude: 114.5023200000,
      width: 30,
      height: 30
    }],
    polyline: [{
      points: [{
        longitude: 114.5023200000,
        latitude: 38.0285000000
      }, {
        longitude: 114.5023200000,
        latitude: 38.0285000000
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],

  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  onLoad: function () {
    console.log("function onLoad")
  }
})