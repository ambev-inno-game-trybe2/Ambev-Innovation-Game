module.exports = newUserValidationRules = {
  bio: {
    name: {
      firstName: 'string|required|min:4|max:12',
      lastName: 'required|required|min:4|max:12',
    },
    age: 'required|integer',
    birthday: 'required|date',
  },
  address: {
    street: 'required|string|min:6|max:60',
    city: 'required|string|min:4|max:60',
    state: 'required|string|min:2|max:60',
    country: 'required|string|min:4|max:60',
  },
  email: 'required|email',
  password: 'required|string|min:8|max:24',
};
