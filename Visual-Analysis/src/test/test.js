var obj = {}; //或者 var obj=new Object();
// var key = "name";
// var value = "张三丰";
for (var i = 0; i < 10; i++) {
  var key = i;
  var value = i;
  obj[key] = value;
}
// obj[key] = value;
console.info(obj);
