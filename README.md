# zona
JavaScript library for zona.plus
# main
```js
async function main(){
    const {zona} = require('./zona');
    const zona_plus= new zona();
    let req=await zona_plus.tvseries_list(page)
    console.log(req)
}
main()
```
