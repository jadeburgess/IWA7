const nickname = null;
const firstname = null;

if (nickname || firstname) {
  console.log(`Good morning, ${nickname ? nickname : firstname}!`);
} else {
  console.log("Good morning!");
}