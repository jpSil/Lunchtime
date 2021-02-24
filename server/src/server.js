const express = require('express');
const cors = require('cors')
const server = express();
const port = 5000;

let recipes = [
  recipe = {
      "id": 1,
      "name": "Ceasar Salad",
      "description:": "A tasty chicken salad with ceasar dressing",
      "ingredients": [
          {
              "item": "green salad",
              "quantity": 200,
              "unit": "gr"
          },
          {
              "item": "tomato",
              "quantity": 100,
              "unit": "gr"
          },
          {
              "item": "chicken",
              "quantity": 250,
              "unit": "gr"
          }
      ],
      "instructions": [
          {
              "instruction": "Wash and rinse salad"
          },
          {
              "instruction": "Slice and dice tomato"
          },
          {
              "instruction": "Cut chicken and heat on pan"
          }
      ]
    }
]

server.use(cors());

server.get('/recipes', (request, response) => {
    response.send(recipes);
})

server.get('/recipes/:id', (request, response) => {
    const result = recipes.filter((r) => r.id === parseInt(request.params.id));
    response.send(result);
})

server.listen(port, () =>{
    console.log('Server listening at http://localhost:${port}');
})