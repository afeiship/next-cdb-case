(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.cdbCase = function (inString) {
    var tmp = '';
    var str = inString || '';
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) == 12288) {
        tmp += String.fromCharCode(str.charCodeAt(i) - 12256);
        continue;
      }
      if (str.charCodeAt(i) > 65280 && str.charCodeAt(i) < 65375) {
        tmp += String.fromCharCode(str.charCodeAt(i) - 65248);
      } else {
        tmp += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return tmp;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.cdbCase;
  }
})();
