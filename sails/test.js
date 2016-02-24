
// WTF?

// time execution: ~3000
//
// function find(val){
//
//     function index (value) {
//         return [1,2,3].indexOf(value);
//     }
//
//     return index(val);
// }
//
// var start = Date.now();
//
// for (i=0; i < 1000000; i++) {
//     find(2);
// }
//
// console.log(Date.now() - start);


// time execution: ~50
//
// function index (value) {
//     return [1,2,3].indexOf(value);
// }
//
// function find(val){
//
//     return index(val);
//
// }
//
// var start = Date.now();
//
// for (i=0; i < 1000000; i++) {
//     find(2);
// }
//
// console.log(Date.now() - start);