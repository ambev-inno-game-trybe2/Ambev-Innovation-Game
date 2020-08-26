export const receitasMock = [
  {
    _id: 1,
    title: 'Sabor Mineiro',
    userId: 2,
    description: 'Combinação perfeita com qualquer tipo de queijo',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'MG', city: 'Belo horizonte', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0UKotmTcrbHfMrKPJU9WEyeG1-_I9rw6bw&usqp=CAU',
    ingredients: [
      {
        ingredientId: 5,
        quantity: 2,
      },
      {
        ingredientId: 1,
        quantity: 4,
      },
    ],
  },
  {
    _id: 2,
    title: 'Refresco do Morumbi',
    userId: 2,
    description: 'Receita do intervalo do jogo',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'SP', city: 'São Paulo', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7IBL_QXrLYAs4iQ9307GmnC5X8dCxD5iTMA&usqp=CAU',
    ingredients: [
      {
        ingredientId: 5,
        quantity: 2,
      },
      {
        ingredientId: 1,
        quantity: 4,
      },
    ],
  },
  {
    _id: 3,
    title: 'Refresco da Praia',
    userId: 2,
    description: 'Mata a sua sede, aumenta sua vontade',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'RJ', city: 'Rio de Janeiro', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYhp7NUz54DnaqeaZ-b3j42UVE8RmI66jIAQ&usqp=CAU',
    ingredients: [
      {
        ingredientId: 5,
        quantity: 2,
      },
      {
        ingredientId: 1,
        quantity: 4,
      },
    ],
  },
];

export const userMock = [
  {
    _id: 1,
    name: 'Rhian',
    email: 'rhian@gmail.com',
    password: '123456',
    favoritesIngredients: ['ingredientId'],
    favoritesReceites: ['receitaId'],
  },
  {
    _id: 2,
    name: 'Hebert',
    email: 'hebert@gmail.com',
    password: '123456',
    favoritesIngredients: ['ingredientId'],
    favoritesReceites: ['idreceita'],
  },
];

export const ingredientesMock = [
  {
    _id: 1,
    name: 'maça',
    nickname: ['apple'],
    liked: 100,
  },
  {
    _id: 2,
    name: 'laranja',
    nickname: ['orange'],
    liked: 3,
  },
  {
    _id: 3,
    name: 'morango',
    nickname: ['strawberry'],
    liked: 33,
  },
  {
    _id: 4,
    name: 'abacaxi',
    nickname: ['pineapple'],
    liked: 67,
  },
  {
    _id: 5,
    name: 'uva',
    nickname: ['grape'],
    liked: 38,
  },
];

export const receitaDetalheMock = {
  _id: 1,
  title: 'Sabor Mineiro',
  userId: 2,
  description: 'Combinação perfeita com qualquer tipo de queijo',
  preparationMode: 'como fazer esta receita',
  origin: { state: 'MG', city: 'Belo horizonte', address: 'Rua num sei da onde' },
  category: 'suco',
  liked: 100,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU0UKotmTcrbHfMrKPJU9WEyeG1-_I9rw6bw&usqp=CAU',
  ingredients: [
    {
      name: 'Morango',// ingredientId: 5,
      quantity: 2,
    },
    {
      name: 'Maça',// ingredientId: 1,
      quantity: 4,
    },
  ],
}
