(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.mapKey = function (inObj, inCallback, inContext) {
    var result = {};
    nx.each(inObj, function (key, value) {
      var key = inCallback.call(inContext, key, value, inObj);
      result[key] = value;
    }, inContext);
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapKey;
  }

}());
