import geoJSON from '../geo.json';

export default geoJSON.features.map((feature) => ({
  coordinate: {
    latitude: feature.geometry.coordinates[1],
    longitude: feature.geometry.coordinates[0],
  },
  moodName: feature.properties.moodName,
  moodEmoji: feature.properties.moodEmoji,
}));
