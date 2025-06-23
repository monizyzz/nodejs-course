// for await of
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albuns] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log(users);
    console.log(posts);
    console.log(albuns);
  } catch (err) {
    console.log("oops", err);
  }
};

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));

  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};
