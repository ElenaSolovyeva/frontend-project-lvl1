1. https://ru.hexlet.io/projects/44/members/8487/mentor  

Не понятно, что за ссылка,  открывается страница “Проверка”, последние замечания от 27 мая.

>В ридми указан демо-бэйдж от CodeClimate.  

Нужно указать другой бэйдж?



2. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/.eslintrc.yml#L5

> Поддержка браузерной среды не требуется. Ведь у нас утилита командной строки.   

исправила



3. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/.eslintignore#L1

> Бабель не используем. А значит, эта директория не появится в проекте. Нет необходимости её игнорить.  

- “dist” удалила, в файле больше ничего нет. Нужно ли сам файл  .eslintignore удалить?  
Кстати, во 2м разделе проекта сказано:
> “Полностью настроенный js пакет — пример, в котором есть все от и до. В любой непонятной ситуации сравнивайте свое решение с тем, что сделано в этом шаблоне”
https://github.com/hexlet-boilerplates/nodejs-package

и в этом шаблоне есть файл .eslintignore с “dist”, получается что либо образец неправильный, либо замечание  


 4. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/master/.eslint

> Не понятно, для чего этот файл.  
Линтеру достаточно указать один файл конфигурации. Формат пользователь может выбрать удобный для себя.  

- Не могу вспомнить, как и почему появился этот файл. Вроде он пустой, можно ли его просто удалить? Как понять, не сломается что-нибудь после удаления?



5. https://github.com/ElenaSolovyeva/frontend-project-lvl1/tree/master/games

> В директории games должны хранится игры 😊  

Так там вроде игры и хранятся. Не совсем понятно, что нужно исправить


6. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/bin/brain-even.js#L7

> Передача параметров функции - это тоже элементы логики приложения. В исполняемом файле должен быть только непосредственно запуск игры. Т.е. просто вызов функции.

 Не понятно, как исправить это замечание - вся логика построена так, что функция playWithUser имеет параметры, и мы эту логику согласовывали в процессе проверок


7. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/util.js#L7-L44

> Это специфические функции. Они не являются общеигровыми. Т.е. их лучше расположить в соответствующих игровых модулях.

 - функция getRandomInt используется во всех играх, перенести ее в index.js?  Остальные функции перенесла в соответствующие модули.  Мы согласовывали структуру файлов проекта, получаются разногласия во взглядах наставника и ментора.



8. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/util.js#L23

> Нужно учитывать пограничные случаи: 1, 0 и отрицательные числа простыми не являются.

- исправила

> devisor — грамматическая ошибка.

- исправлено в последней версии



9. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/util.js#L33

> Эту функцию лучше сделать чистой. Чтобы она генерировала прогрессию по заданным параметрам.

-  в последней версии  исправлено на
    const progression = Array.from(Array(progressionLength), (item, index) => (first + index * (1 + step)));



10. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/brain-calc-features.js#L15-L16

>Вопрос можно собрать за пределами switch. Все необходимые данные уже для этого есть.
А ответ привести к строке в одном месте, чтобы не дублировать код.

- исправила, по-моему стало хуже



11. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/brain-calc-features.js#L29

> Если не выбрасываем исключение (обработку ошибок будем проходить позже), то лучше просто вернуть null.

- исправила



12. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/brain-gcd-features.js#L3

>Множественное число — используем для списков.

 - исправила gameRules на gameRule

> Это описание или задание игры.

- вопрос не понятен ) Просьба переформулировать



13. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/brain-gcd-features.js#L5

> Вопрос и ответ игры опциями по сути не являются

- в последней версии исправлено на generateRound.



14. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/index.js#L5

> Тут нужно соотнести операцию, которую выполняет функция, и значение, которое она возвращает с именем.

- функция имеет побочный эффект (вывод в консоль) и возвращает имя пользователя. В последней версии она переименована  
    const getUserName = () => {
      const userName = readlineSync.question('May I have your name,  my dear? ');
      console.log(`Hi, ${userName}`);
    return userName;
    };
Нужно ли еще что-то изменить?



15. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/index.js#L11-L14

> Возникает вопрос: почему для этого сообщения выделена отдельная функция, а для остальных нет? Важно соблюдать принцип последовательности.

- исправила


16. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/index.js#L40

> Нужно не дыру затыкать, а разобраться с ошибкой линтера.  

- разобралась, в последней версии было правильно


 17. https://github.com/ElenaSolovyeva/frontend-project-lvl1/blob/f2fbf30e1d16460654205ce8d1ea95485c666b8e/games/index.js#L1

> Не стоит оставлять артефакты.

- исправила
