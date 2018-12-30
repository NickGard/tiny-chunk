Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chunk = function(array, size) {
  var chunkSize = size === +size && size >= 1 ? Math.floor(size) : 1;
  return array.reduce(function(chunks, element, index) {
    if (index % chunkSize == 0) {
      chunks[chunks.length] = [element];
    } else {
      chunks[chunks.length - 1].push(element);
    }
    return chunks;
  }, []);
};
