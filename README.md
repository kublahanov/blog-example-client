# Blog example (test case): frontend client based on VueJS3 + Element UI

## Необходимые требования

Для возможности локальной установки и запуска проекта необходимо наличие установленных в системе:

- [git](https://git-scm.com/)
- [nodejs](https://nodejs.org/en/download/package-manager)

## Шаги по локальной установке

Необходимо выполнить в консоли следующие действия:

1. Склонировать код репозитория: `git clone git@github.com:kublahanov/winwin-client-vite.git`.
2. Перейти в полученную папку проекта: `cd winwin-client-vite`.
3. Выполнить сборку: `npm install`.
4. Запустить локальный сервер: `npm run dev`.
5. Открыть в браузере указанную в консоли ссылку (например http://localhost:5173/).

---

## Описание задачи

С помощью Laravel и Vue реализовать блог, в котором каждый пользователь может создавать / редактировать / удалять свои
посты. Пост состоит из названия (до 255 символов), текстового описания (4096 символов) и до 10 тегов. Теги имеют только
название (без учёта регистра) и хранятся в отдельной таблице. Если тег с таким именем уже существует в базе, то
дублировать его не нужно.

На главной странице отображается список всех постов с их тегами среди всех пользователей отсортированных по дате
создания от новых к старым. Сверху чекбокс-фильтр - отобразить только мои посты, и кнопка - создать новый пост. При
нажатии на неё - происходит переход на страницу, где обычная форма - название (input), описание (textarea), снизу кнопка
добавить тег - появляется поле (input) для ввода названия тега, рядом кнопка удалить тег и кнопка сохранить. После
сохранения происходит переход на главную страницу.

Если пост принадлежит аутентифицированному пользователю - то на главной странице возле поста отображаются 2 кнопки -
удалить и редактировать. Если нажать удалить - пост удалится без перезагрузки страницы. Если нажать редактировать -
произойдёт переход на страницу с редактированием (она должна быть аналогична странице с созданием).

Для авторизации пользователя рекомендуется использовать библиотеку Laravel Passport через bearer-токен.
Т. е. есть api-метод, который принимает логин и пароль - в ответ возвращает bearer-токен.

Тестового пользователя, логин (test@test.com) и пароль - создать с помощью Laravel seeders / factory (логику по
регистрации пользователя делать не нужно).

Для запросов от Vue к Laravel рекомендуется использовать библиотеку Axios. Дизайн не важен, хорошо если будет
использоваться фреймворк ElementUI.

## Вклад в проект

Если у вас есть предложения по улучшению этого проекта или вы хотите сообщить об ошибке - пожалуйста,
создайте [задачу](https://github.com/kublahanov/winwin-client-vite/issues) или
[запрос на обновление](https://github.com/kublahanov/winwin-client-vite/pulls).

## Лицензия

Этот проект соответствует лицензии [MIT](https://opensource.org/licenses/MIT).
