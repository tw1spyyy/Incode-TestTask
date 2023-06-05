##  🚀 Test task for the position of Junior Frontend Developer(React.js) in Incode Group

Головним завданням є створення демо додатку, де користувач мав би змогу зареєструвати свій аккаунт за допомогою **Sign Up** форми та згодом увійти в нього через **Sign In** форму. Після успішного входу, користувача повинно автоматично перенаправити на сторінку **Home**, де в мабутньому він мав би змогу скористатися кнопкою *Logout* для виходу зі свого аккаунту.

<br>

## 🛠 Technologies i used

⚡️ **Основа**

- ```TypeScript```
- ```React``` 

⚡️ **State менеджер та middleware**

- ```Redux Toolkit```
- ```Redux Thunk```

⚡️ **Роутінг**

- ```React Router```

⚡️ **Робота із запитами**

- ```Axios```

⚡️ **Обробка форм**

- ```React Hook Form```

⚡️ **Валідація форм**

- ```Yup```

⚡️ **Стилізація**

- ```styled-component```
- ```SASS/SCSS/LESS modules```

⚡️ **Валідація та форматування коду**

- ```ESLint``` 
- ```Prettier```

## 👩‍💻 Technical aspects

Додаток складається з 2-х сторінок **Auth** та **Home**:

* **Auth** сторінка повинна містити в собі **Sign Up** та **Sign In** форми, які динамічно перемикаються відоповідно до функціоналу.
* **Home** сторінка повинна містити  в собі повідомлення про успішний вхід в додаток та кнопку *Logout*.

In the test task, i paid attention to every little thing, starting from the validation of forms, the output of input errors and errors during requests, and ending with a redirect to our pages and refreshToken before logout
