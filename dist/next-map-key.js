(function () {

  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.mapKey = function (inObj, inCallback, inContext) {
    var result = {};
    nx.each(inObj, function (key, value) {
      var _key = inCallback.call(inContext, key, value, inObj);
      result[_key] = value;
    }, inContext);
    return result;
  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.mapKey;
  }

}());
