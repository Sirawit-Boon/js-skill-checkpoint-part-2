// เริ่มเขียนโค้ดตรงนี้
async function getUser() {
  try {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    const filteredData = await data
      .filter((user) => user.name.length > 17)
      .map((user) => user.name);
    return console.log(filteredData);
  } catch (error) {
    console.log(error);
  }
}

getUser();
