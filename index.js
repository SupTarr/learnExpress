import express, { request } from "express";

const app = express();

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });

app.get('/', (req, res) => {
  res.send('<h1>My name is Tata</h1>');
})

app.listen(3000, () => {
  console.log(`Server is listening on port ${3000}`);
})

// const monsters = {
//   hydra: { height: 3, age: 4 },
//   dragon: { height: 200, age: 350 },
// };
// // GET /monsters/hydra
// app.get("/monsters/:name", (req, res, next) => {
//   console.log(req.params); // { name: 'hydra' }
//   res.send(monsters);
// });

// const monsters = { '1': { name: 'cerberus', age: '4'  } };
// // PUT /monsters/1?name=chimera&age=1
// app.put('/monsters/:id', (req, res, next) => {
//   const monsterUpdates = req.query;
//   monsters[req.params.id] = monsterUpdates;
//   res.send(monsters[req.params.id]);
// });

// // Want to GET
// // GET http://localhost:8080/
// const chickenRice = {
//   rice: "Oiled rice",
//   meat: "Boiled chicken",
//   sauce: ["Soy sauce", "Sichuan sauce", "Hot sauce"],
// };
// app.get("/chickenRice", (req, res) => {
//   //   default: 200
//   res.status(200).send(req.params);
// });

// app.get("/fried-chicken-rice", (req, res) => {
//   const friedChickenRice = {
//     rice: "Oiled rice",
//     meat: "fried chicken",
//     sauce: "Mae Pra Nom",
//   };
//   //   default: 200
//   res.status(404).send(friedChickenRice);
// });

// app.get("/:menu", (req, res) => {
//     console.log('Request Parameter');
//     console.log(req.params);
//     const { menu } = req.params;
//     if (menu === "chicken-rice") {
//         const chickenRice = {
//             rice: "Oiled rice",
//             meat: "Boiled chicken",
//             sauce: ["Soy sauce", "Sichuan sauce", "Hot sauce"],
//         };
//         res.status(200).send(chickenRice);
//     } else if (menu === "fried-chicken-rice") {
//         const friedChickenRice = {
//             rice: "Oiled rice",
//             meat: "fried chicken",
//             sauce: "Mae Pra Nom",
//         };
//         res.status(200).send(friedChickenRice);
//     } else {
//         res.status(404).send("Not found");
//     }
// });
// const preOrder = [];
// app.post("/:menu", (req, res) => {
//    const { menu } = req.params;
//    const preOrder = {
//     id: preOrder.length,
//     menu: menu,
//    }
//    preOrder.push(preOrder);
//    res.status(200).send(`Order place, Your order id ${preOrder.id}`);
// });

// app.listen(8080, () => {
//     console.log("Server is running on port 8080");
// });
