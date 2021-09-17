(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.cdbCase can transform （/）to (全能版)', function () {
      const res = nx.cdbCase('玛鲁ABC亲子乐园 V1.0.0（全能版）L1');
      expect(res).toBe('玛鲁ABC亲子乐园 V1.0.0(全能版)L1');
    });
  });
})();
