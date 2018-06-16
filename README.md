# next-map-key
> Map key for next

## install:
```bash
npm install -S afeiship/next-map-key --registry=https://registry.npm.taobao.org
```

## usage:
```js
var obj1 = {nx_name: 'fei',nx_test:'test-value', nx_age:100};
var rs1 = nx.mapKey(obj1, (key,value)=>{
  return key.slice(3);
});

// result:
// { name: 'fei',test:'test-value', age:100 }
```
