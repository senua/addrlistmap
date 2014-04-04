var map, objs;

$(function() {

  ymaps.ready(function() {
    map = new ymaps.Map('map', {
      center: [55.76, 37.64],
      zoom: 10,
      behaviors: ['default', 'scrollZoom'],
    });
    map.controls.add('mapTools');
    objs = new ymaps.GeoQueryResult();
  });
  
  $('#process').click(function() {
    console.log('click');
    objs.removeFromMap(map);
    objs = ymaps.geoQuery();
    $('#input').val().replace(/^\s+/mg, '').replace(/\s+$/, '')
        .split('\n').forEach(function(row) {
          objs = objs.add(ymaps.geocode(row))
        });
    objs = objs.addToMap(map);
  })
})

  
