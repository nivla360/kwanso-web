
async function isConnected(text) {
//    alert(text)

var ee = await require(['dns']).resolve('www.google.com',
//function(err) {
//  if(err){
//      return false;
//  }else{
//      return true;
//  }
//}
);
console.log(ee);
//const err = !!await require(['dns']).resolve('google.com').catch(()=>{});
//console.log(err);
//if(err){
//    return false;
//}else{
//    return true;
//}
//    return 'Nice';
}

window.logger = (flutter_value) => {
   console.log({ js_context: this, flutter_value });
}