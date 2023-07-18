mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: campground.geometry.coordinates,
    zoom: 8
});
map.addControl(new mapboxgl.NavigationControl());
const marker = new mapboxgl.Marker()
  .setLngLat(campground.geometry.coordinates)
  .setPopup(
      new mapboxgl.Popup({offset: 25})
      .setHTML(
          `<strong><a style="text-decoration: none;" href="/campgrounds/${campground._id}">${campground.title}</a><strong><p style="margin-bottom: 0; font-weight: normal;" class="text-muted">${campground.location}</p>`
      )
  )
  .addTo(map);