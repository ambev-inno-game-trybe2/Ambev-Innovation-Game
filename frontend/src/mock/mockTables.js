export const receitasMock = [
  {
    _id: 1,
    title: 'receita top demais',
    userId: 2,
    description: 'falar sobre esta receita',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'MG', city: 'Belo horizonte', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'image.png',
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
    title: 'receita top demais',
    userId: 2,
    description: 'falar sobre esta receita',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'SP', city: 'São Paulo', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'image.png',
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
    title: 'receita top demais',
    userId: 2,
    description: 'falar sobre esta receita',
    preparationMode: 'como fazer esta receita',
    origin: { state: 'RJ', city: 'Rio de Janeiro', address: 'Rua num sei da onde' },
    category: 'suco',
    liked: 100,
    image: 'image.png',
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
  title: 'receita top demais',
  userId: 2,
  description: 'falar sobre esta receita',
  preparationMode: 'como fazer esta receita',
  origin: { state: 'MG', city: 'Belo horizonte', address: 'Rua num sei da onde' },
  category: 'suco',
  liked: 100,
  image: 'image.png',
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
}
