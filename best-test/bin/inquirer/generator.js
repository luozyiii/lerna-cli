function* g() {
  console.log('read');
  let ch = yield;
  console.log(ch);
}
const f = g();
console.log(f); // Object [Generator] {}
f.next(); // read
f.next('a'); // a
