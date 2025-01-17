 # Дипломное задание к курсу «Основы JavaScript»

Вы присоединились к команде, разрабатывающей сайт-биржу для крипто-стартапа. На этом сайте можно покупать внутреннюю валюту компании под названием **Неткоин** и передавать эту валюту другим пользователям сервиса. Вы подключаетесь на финальной стадии разработки проекта, поэтому основные его части уже реализованы: есть интерфейс взаимодействия с АPI (бэкендом, где производятся операции с пользователями и денежными средствами), и интерфейс взаимодействия с DOM (графическим интерфейсом, который вы видите в браузере). Ваша задача связать эти две части: сделать так, чтобы данные, введённые пользователем, отправлялись на сервер, а информация, предоставленная сервером, отобразилась пользователю.


## Начало работы

### Настройка сервера

1. Установите [NodeJS](https://nodejs.org/en/) для своей операционной системы. Советуем использовать LTS (Long Time Support) версию.
2. Сделайте форк данного репозитория.
3. Клонируйте форкнутый репозиторий.
4. Откройте терминал и перейдите в папку с клонированным репозиторием.
5. Установите зависимости, выполнив команду `npm install`.

Убедитесь, что выполняете команды с правами администратора.

### Запуск сервера

1. Откройте терминал, перейдите в папку с клонированным репозиторием и выполните команду `npm start`. Убедитесь, что в консоли появилась надпись `Server started at 8000`.
2. Перейдите по [ссылке](http://localhost:8000). Вы увидите интерфейс Биржи Неткоинов.

### Завершение работы сервера

1. Если нужно прекратить работу сервера, нажмите комбинацию клавиш `Ctrl+C`.

## Структура проекта

В проекте есть две страницы, функционал которых вам нужно будет реализовать:

1. Страница «Вход и регистрация»:

![Страница «Вход и регистрация»](img/loginPage.jpg)

Код для реализации функционала этой страницы пишите в файле `public/loginPage.js`.

Задание для страницы входа и регистрации находится по [ссылке](./md/loginpage.md).

2. Страница «Личный кабинет пользователя»:

![Страница «Личный кабинет пользователя»](img/homePage.jpg)

Код для этой страницы пишите в файле `public/homePage.js`.

Задание для страницы личного кабинета находится по [ссылке](./md/homepage.md).

Файлы `public/loginPage.js` и `public/homePage.js` уже созданы для вас и подключены, дополнительная настройка не требуется.

## Отправка работы на проверку

Чтобы отправить работу на проверку, загрузите репозиторий на [GitHub](https://github.com/).

### Как правильно задавать вопросы дипломному руководителю?

#### Что следует делать, чтобы все получилось:

-   Попробуйте найти ответ в лекциях, материалах и домашних заданиях курса. После этого воспользуйтесь Гуглом. В случае любой сложности вы можете задать вопрос дипломному руководителю. Но лучше иметь «на руках» несколько попыток самостоятельного решения проблемы.
-   В одном вопросе лучше описывать одну проблему. Так ответ дипломного руководителя будет максимально эффективным и полезным.
-   По возможности прикрепляйте к вопросу скриншоты и стрелочкой показывайте где не получается. Программу для этого можно скачать здесь https://app.prntscr.com/ru/.
-   По возможности задавайте вопросы в комментариях к коду.
-   Начинайте работу над дипломом как можно раньше! Чтобы было больше времени на правки.
-   Делайте диплом по частям, а не всё сразу. Иначе есть шанс, что нужно будет всё переделывать 🙂

#### Что следует делать, чтобы ничего не получилось:

-   Писать вопросы вида «Ничего не работает. Не запускается. Всё сломалось.»
-   Откладывать диплом на последний момент.
