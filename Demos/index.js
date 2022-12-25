function one() {
  let a = 10;
  function b() {
    let q = 10;
    console.log(q + a);
  }
  return b();
}

console.log(one());
console.log("Namaste JavaScript");
