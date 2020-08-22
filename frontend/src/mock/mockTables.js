export const receitasMock = [
  {
    _id: 1,
    title: 'receita top demais',
    userId: 2,
    description: 'falar sobre esta receita',
    preparationMode: 'como fazer esta receita',
    origin: {
      state: 'MG',
      city: 'Belo horizonte',
      address: 'Rua num sei da onde',
    },
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
    origin: {
      state: 'RJ',
      city: 'Rio de Janeiro',
      address: 'Rua num sei da onde',
    },
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
    _id: 4,
    title: 'Coquetel de Frutas Com Guaraná Antárctica',
    userId: 2,
    description: 'Coquetel de Frutas Com Guaraná Antárctica sem álcool',
    preparationMode: `1. Coloque todos os ingredientes juntos e misture bem. Eu uso uma jarra que tenho de 5 litros.
    2. Servir gelado em tacinhas.`,
    origin: {
      state: 'BA',
      city: 'Feira de Santana',
      address: 'Rua num sei da onde',
    },
    category: 'coquetel',
    liked: 300,
    image:
      'https://i.pinimg.com/564x/c4/3b/96/c43b96f5675246ae6b0f1132735cea85.jpg',
    ingredients: [
      {
        ingredientId: 6,
        quantity: 1,
      },
      {
        ingredientId: 7,
        quantity: 1,
      },
      {
        ingredientId: 8,
        quantity: 1,
      },
      {
        ingredientId: 9,
        quantity: 1,
      },
      {
        ingredientId: 10,
        quantity: 300,
      },
      {
        ingredientId: 11,
        quantity: 3,
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
  {
    _id: 6,
    name: 'suco de goiaba',
    nickname: ['suco concentrado de goiaba'],
    liked: 22,
  },
  {
    _id: 7,
    name: 'suco de caju',
    nickname: ['suco concentrado de caju'],
    liked: 76,
  },
  {
    _id: 8,
    name: 'suco de maracujá',
    nickname: ['suco concentrado de maracujá'],
    liked: 76,
  },
  {
    _id: 9,
    name: 'suco de manga',
    nickname: ['suco concentrado de manga'],
    liked: 40,
  },
  {
    _id: 10,
    name: 'groselha',
    nickname: ['suco concentrado de groselha'],
    liked: 12,
  },
  {
    _id: 11,
    name: 'guaraná Antártica',
    nickname: ['guaraná Antártica'],
    liked: 249,
  },
];

export const receitaDetalheMock = {
  _id: 1,
  title: 'receita top demais',
  userId: 2,
  description: 'falar sobre esta receita',
  preparationMode: 'como fazer esta receita',
  origin: {
    state: 'MG',
    city: 'Belo horizonte',
    address: 'Rua num sei da onde',
  },
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
};
