# goit-react-native

ДЗ №1 Завдання​ Встановити expo

Встановити Android Studio

Встановити Xcode (якщо працюєте на Mac)

Ініціалізувати проект за допомогою expo (Вибираємо шаблон проекту blank)

Запустити проект

Налаштувати Android Studio

Налаштувати Xcode (якщо працюєте на Mac)

Встановити expo client собі на телефон

Запустити створений проект на телефоні, емуляторі Android, симуляторі iOS (якщо працюєте на Mac)

ДЗ №2 Завдання​ Створити папку Screens

Створити компонент RegistrationScreen

Створити компонент LoginScreen

Створити екран PostsScreen

Додати розмітку форми в компонент RegistrationScreen

Додати розмітку форми в компонент LoginScreen

Додати стилі до компонента RegistrationScreen

Додати стилі до компонента LoginScreen

ДЗ №3 Завдання​ Додати логіку роботи з формою в компонент RegistrationScreen

Додати логіку роботи з формою в компонент LoginScreen

Під час сабміту форм збирати дані з них і виводити в консоль

Додати автозакриття клавіатури по кліку за межами форм (Використовуємо Keyboard.dismiss)

ДЗ №4 Завдання​ Створити екран CreatePostsScreen

Створити екран CommentsScreen

Створити екран ProfileScreen

Створити екран MapScreen

Створити екран Home

Підключити в проект навігацію.

Додати в проект переходи між екранами LoginScreen, RegistrationScreen за допомогою компонента createStackNavigator

З RegistrationScreen можна перейти на LoginScreen, натиснувши на текст Увійти

З LoginScreen можна перейти на RegistrationScreen, натиснувши на текст Зареєструватися

Після сабміту в LoginScreen, RegistrationScreen перекидає на Home, де відразу показується екран PostsScreen

Підключити нижню навігацію, використовуючи createBottomTabNavigator

У нижній навігації створити 3 переходи.

Клік по іконці №1 веде на екран PostsScreen

Клік по іконці №2 веде на екран CreatePostsScreen

Клік по іконці №3 веде на екран ProfileScreen

В хедері на екрані PostsScreen додати іконку для logout

Стилізувати нижню навігацію

ДЗ №5 Завдання​ Підключити камеру в компонент CreatePostsScreen

Під час відкриття екрану CreatePostsScreen активується камера і зображення з неї виводиться в блок з іконкою камери

По кліку на іконку камери робиться знімок

В інпут з плейсхолдером Назва можна додати назву фото

В інпут з плейсхолдером Місцевість можна додати назву, де було зроблено знімок

Додати визначення геолокації в момент створення посту при кліку на кнопку Опублікувати

Після створення посту повинно перенаправляти на екран PostsScreen

В компоненті окремого посту при кліку на іконку коментарів перекидає на екран CommentsScreen

У компоненті окремого посту під час кліку на іконку геолокації перекидає на екран MapScreen, де можна побачити мапу з маркером, де була зроблена фотографія

ДЗ №6 Завдання​ Підключити Redux до проекту

Підключити Firebase до проекту

Додати логіку реєстрації на екрані RegistrationScreen через методи Firebase

Додати логіку логіна на екрані LoginScreen через методи Firebase

Оновити профіль користувача на Firebase та додати туди логін у поле displayName після реєстрації

Зберігати дані про користувача в Redux після реєстрації або логінізації

Додати перевірку, чи залогінений користувач у застосунку чи ні. Якщо залогінений, то відразу перенаправляти на екран PostsScreen, інакше - на екран LoginScreen

Додати логіку Logout на екрані PostsScreen під час натискання на іконку в хедері, використовуючи методи Firebase

Додати логіку завантаження постів у базу даних, використовуючи Firebase та Redux

Додати логіку додавання коментаря під постом, використовуючи Firebase та Redux

ДЗ №7 Завдання​ Викласти проект на сервери expo