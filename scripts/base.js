const head = document.querySelector(".text");
const mainClick = document.querySelector(".main-click");
const listContainer = document.querySelector("#list");
const numbersOfQuestions = document.querySelector(".numbersQuestions");

let score = 0; // правильные ответы
let questionIndex = 0; // текущий вопрос
let isStarted = false;
let numbQuestInText = 6; //количество вопросов в тесте
let now = new Date();
let nowMessage;

const questions = [
  {
    question: "Какая самая горячая планета в солнечной системе?",
    answers: ["Венера", "Сатурн", "Меркурий", "Марс"],
    correct: 1,
  },
  {
    question: "Сколько синих полос на флаге США?",
    answers: ["6", "7", "13", "0"],
    correct: 4,
  },
  {
    question: "Как назывался корабль капитана Джека Воробья?",
    answers: ["Мародер", "Черная жемчужина", "Черный питон", "Слизерин"],
    correct: 2,
  },
  {
    question: "Fe — это символ какого химического элемента?",
    answers: ["Цинк", "Водород", "Фтор", "Железо"],
    correct: 4,
  },
  {
    question: "На каком языке говорит больше всего людей на Земле?",
    answers: ["Китайский", "Испанский", "Арабский", "Английский"],
    correct: 1,
  },
  {
    question: "Сколько сердец у осьминога?",
    answers: ["1", "2", "3", "4"],
    correct: 3,
  },
  {
    question: "Какая кошка самая большая на планете?",
    answers: ["Лев", "Тигр", "Гепард", "Барс"],
    correct: 2,
  },
  {
    question: "Какое сухопутное животное может открыть рот максимально широко?",
    answers: ["Аллигатор", "Крокодил", "Бабуин", "Бегемот"],
    correct: 4,
  },
  {
    question: "Какое животное самое крупное на Земле?",
    answers: ["Африканский слон", "Синий кит", "Кашалот", "Гигантский кальмар"],
    correct: 2,
  },
  {
    question: "Какое млекопитающее умеет летать?",
    answers: ["Летучая мышь", "Белка-летяга", "Белоголовый орлан", "Колуго"],
    correct: 1,
  },
  {
    question: "Как называется животное, которое употребляет в пищу растения и мясо?",
    answers: ["Плотоядное животное", "Травоядное животное", "Всеядное животное", "Пескатариан"],
    correct: 3,
  },
  {
    question: "Почему каланы («морские выдры») держатся за руки?",
    answers: ["Потому что они любят друг друга", "Чтобы показать, что они в одной семье", "Чтобы они не уплывали, когда спят", "Потому что они играют"],
    correct: 3,
  },
  {
    question: "Как отличить насекомое от паука?",
    answers: ["У насекомых три части тела, у пауков – две", "У насекомых шесть ног, у пауков – восемь", "У насекомых могут быть крылья, у пауков они отсутствуют", "Все вышеперечисленные факты"],
    correct: 4,
  },
  {
    question: "Чем утконос отличается от других млекопитающих?",
    answers: ["Крякает, как утка", "Откладывает яйца", "Строит гнезда", "Ковыляет"],
    correct: 2,
  },
  {
    question: "Почему змеи высовывают язык?",
    answers: ["Чтобы напугать хищников", "Чтобы облизать добычу", "Чтобы издать шипящий звук", "Чтобы «понюхать» воздух"],
    correct: 4,
  },
  {
    question: "Какая планета самая большая в Солнечной системе?",
    answers: ["Юпитер", "Сатурн", "Нептун", "Меркурий"],
    correct: 1,
  },
  {
    question: "На какой планете самый короткий день?",
    answers: ["Меркурий", "Земля", "Нептун", "Юпитер"],
    correct: 4,
  },
  {
    question: "Какая звезда ближе всего к Земле?",
    answers: ["Полярная звезда", "Сириус", "Солнце", "Андромеда"],
    correct: 3,
  },
  {
    question: "Как называется метеорит, который упал на Землю 15 февраля 2013 года?",
    answers: ["Тунгусский", "Челябинский", "Гоба", "Альенде"],
    correct: 2,
  },
  {
    question: "Что такое лунное затмение?",
    answers: ["Когда Земля находится между Солнцем и Луной", "Когда Луна находится между Землей и Солнцем", "Когда Солнце находится между Землей и Луной", "Когда «Луна охотника» выпадает на Хэллоуин"],
    correct: 1,
  },
  {
    question: "В каком направлении восходит солнце?",
    answers: ["Север", "Юг", "Восток", "Запад"],
    correct: 3,
  },
  {
    question: "Как ведет себя лед в воде?",
    answers: ["Тонет", "Плавает на поверхности", "Иногда тонет, иногда плывет", "Лед является водой, поэтому вопрос с подвохом"],
    correct: 2,
  },
  {
    question: "Под воздействием какой силы предметы падают на землю?",
    answers: ["Электромагнетизм", "Гравитация", "Ядерная сила", "Явление называется просто «сила»"],
    correct: 2,
  },
  {
    question: "Какие деревья растут из желудей?",
    answers: ["Дуб", "Клен", "Гикори", "Грецкий орех"],
    correct: 1,
  },
  {
    question: "В чем разница между ураганом и тайфуном?",
    answers: ["Тайфуны сильнее ураганов", "Тайфуны случаются над сушей, ураганы – над водой", "Ураганы движутся медленнее", "Ни в чем, за исключением места, где они случаются"],
    correct: 4,
  },
  {
    question: "Сколько цветов в радуге?",
    answers: ["7", "10", "6", "8"],
    correct: 1,
  },
  {
    question: "Что самое твердое в нашем теле?",
    answers: ["Кости", "Волосы", "Ногти", "Зубы"],
    correct: 4,
  },
  {
    question: "Где самая быстрая мышца в теле?",
    answers: ["Нога", "Рука", "Пальцы", "Веки"],
    correct: 4,
  },
  {
    question: "Какой водоем самый большой на Земле?",
    answers: ["Тихий океан", "Атлантический океан", "Индийский океан", "Каспийское море"],
    correct: 1,
  },
  {
    question: "Какая страна самая большая на планете?",
    answers: ["США", "Канада", "Китай", "Россия"],
    correct: 4,
  },
  {
    question: "Какая страна самая маленькая на Земле?",
    answers: ["Монако", "Люксембург", "Ватикан", "Мадагаскар"],
    correct: 3,
  },
  {
    question: "Какое место самое холодное на Земле?",
    answers: ["Северный полюс", "Антарктида", "Сибирь", "Мыс Горн, Южная Америка"],
    correct: 2,
  },
  {
    question: "Какая гора имеет самую большую высоту над уровнем моря?",
    answers: ["Мауна-Кеа", "Бурдж-Халифа", "Эверест", "Гора Чимборасо"],
    correct: 3,
  },
  {
    question: "Как называется самое глубокое место в мире?",
    answers: ["Марианская впадина", "Долина Смерти", "Кратерное озеро", "Пещера Д. Веревкина"],
    correct: 1,
  },
  {
    question: "Какой корабль затонул в 1912 году?",
    answers: ["Мэйфлауэр", "Аризона", "Титаник", "USS Constitution"],
    correct: 3,
  },
  {
    question: "Для чего были построены египетские пирамиды?",
    answers: ["Они выполняли функции гробниц", "Они являлись дворцами фараонов", "Они представляли собой оборонительные пункты", "Пирамиды – это гостиницы"],
    correct: 1,
  },
  {
    question: "Как называется самый влиятельный символ в китайской культуре?",
    answers: ["Собака", "Крыса", "Обезьяна", "Дракон"],
    correct: 4,
  },
  {
    question: "Где берут начало Олимпийские игры?",
    answers: ["В Древнем Риме", "В Древней Греции", "На территории Средневековой Англии", "В Австралии"],
    correct: 2,
  },
  {
    question: "Что изобрели и испытали братья Райт?",
    answers: ["Компьютер", "Автомобиль", "Телефон", "Самолет"],
    correct: 4,
  },
  {
    question: "Какая самая длинная река в России?",
    answers: ["Енисей", "Лена", "Волга", "Обь"],
    correct: 2,
  },
  {
    question: "В каком городе ездит самый быстрый поезд «Маглев»?",
    answers: ["Москва", "Нью-Йорк", "Лондон", "Шанхай"],
    correct: 4,
  },
  {
    question: "Какое озеро самое глубокое на планете Земля?",
    answers: ["Мичиган", "Восток", "Байкал", "Сан-Мартин"],
    correct: 3,
  },
  {
    question: "Как называется длина круга?",
    answers: ["Диаметр", "Радиус", "Окружность", "Площадь"],
    correct: 3,
  },
  {
    question: "Какой формы знак остановки (Движение без остановки запрещено)?",
    answers: ["Шестиугольник", "Трапеция", "Октагон", "Параллелограмм"],
    correct: 3,
  },
  {
    question: "Какое число идет после триллиона?",
    answers: ["Миллиард", "Квадриллион", "Квинтиллион", "Гугол"],
    correct: 2,
  },
  {
    question: "Сколько ребер у куба?",
    answers: ["4", "6", "8", "12"],
    correct: 4,
  },
];

///Экран приветствия
listContainer.innerText = getNowHours()

//перемешиваем массив:
shuffleArr(questions)

mainClick.onclick = checkAnswer;

function clearPage() {
  head.innerHTML = "";
  listContainer.innerHTML = "";
}

function showQuestion() {
  // шаблонная метка) можешь сюда добавить разметку (но в этом случае не надо)
  const headTemplate = `%title%`;

  const title = headTemplate.replace(
    "%title%",
    questions[questionIndex]["question"]
  );
  head.innerHTML = title;

  // варианты ответов. можно необычно сделать через entries()
  let answerNumbIter = 1;
  for (item of questions[questionIndex]["answers"]) {
    const questionTemplate = `<li>
            <label>
                <input type="radio" class="answer" value="%number%" name="answer">
                <span>%answer%</span>
            </label>
        </li>`;
    const answerHTML = questionTemplate
      .replace("%answer%", item)
      .replace("%number%", answerNumbIter);
    listContainer.innerHTML += answerHTML;
    answerNumbIter++;
  }
}

function checkAnswer() {
  if (!isStarted) {
    quizStyle()
    // очищаем HTML
    clearPage();
    showQuestion();
    numbOfQuestion(); //Счетчик вопросов
    isStarted = true;
  } else {
    //проверка на выбранность
    const checkedRadio = listContainer.querySelector(
      'input[type="radio"]:checked'
    );
    if (!checkedRadio) {
      mainClick.blur();
      return;
    }

    const userAnswer = parseInt(checkedRadio.value);
    // очко за правильный вариант
    if (userAnswer === questions[questionIndex]["correct"]) {
      score++;
    }
    // последний ли вопрос?
    if (numbQuestInText !== questionIndex + 1) {
      questionIndex++;
      clearPage();
      showQuestion();
    } else {
      clearPage();
      showResults();
    }
    numbOfQuestion(); // счетчик вопросов
  }
}

function showResults() {
  let title, message, numbersOfCorrect;

  //проверка на крутость
  if (score === numbQuestInText) {
    title = "Поздравляем!&#128165;";
    message = "Вы ответили верно на все вопросы!&#128420;";
  } else if ((score * 100) / numbQuestInText >= 50) {
    title = "Неплохой результат!&#129395;";
    message = "Вы правильно ответили на более половины вопросов";
  } else {
    title = "Стоит постараться	&#128056;";
    message = "Менее половины правильных ответов&#128148;";
  }

  numbersOfCorrect = `${score} из ${numbQuestInText}`;
  head.innerHTML = title;
  listContainer.innerHTML = `${message} <br><br><br> ${numbersOfCorrect}`;
  hideNumb()
  // играть снова
  mainClick.blur();
  mainClick.innerText = "Играть снова";
  mainClick.onclick = () => {
    history.go();
  }; //перезагрузка страницы
}

function numbOfQuestion() {
  numbersOfQuestions.innerHTML = `${questionIndex + 1} / ${numbQuestInText}`;
}

function quizStyle() {
  numbersOfQuestions.style.display = "block";
  listContainer.style.textAlign = 'left';
  listContainer.style.fontSize = '1.3em';
  mainClick.innerHTML = "Ответить";
}
function hideNumb() {
  numbersOfQuestions.style.display = "none";
}

//перемешивание массива 
function shuffleArr(array) {
  let m = array.length, t, i;

  // Пока есть элементы для перемешивания
  while (m) {

    // Взять оставшийся элемент
    i = Math.floor(Math.random() * m--);

    // И поменять его местами с текущим элементом
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};


//приветствие в зависимости от времени
function getNowHours() {
  let nowHours = now.getHours()

  switch (nowHours) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      nowMessage = 'Доброй ночи'
      break;

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      nowMessage = 'Доброе утро'
    break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      nowMessage = 'Добрый день'   
    break;

    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      nowMessage = 'Добрый вечер'   
    break;
  }
  return nowMessage
};




