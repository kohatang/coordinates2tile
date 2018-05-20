function long2tile(lon, zoom) {
  return Math.floor((lon + 180) / 360 * Math.pow(2, zoom));
}

function lat2tile(lat, zoom) {
  return Math.floor(
    (1 -
      Math.log(
        Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)
      ) /
        Math.PI) /
      2 *
      Math.pow(2, zoom)
  );
}

module.exports = {
  long2tile,
  lat2tile
};
