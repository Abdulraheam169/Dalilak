// All events data
setMode();

const events = [
  {
    id: "1",
    src: "assests/imgs/boxing3.jpeg",
    title: "تصفيات بطولة التايكواندو للجامعات السورية",
    caption:
      "تعلن الجامعة الافتراضية لطلابها وصول فريق التايكواندو الذي يمثل الجامعة الافتراضية لنهاية تصفيات البطولة والتي تقام في الصالة الرياضية ",
    date: "12-12-2026",
    location: "الحسكة",
    coords: [36.502, 40.747],
    category: "sport",
  },
  {
    id: "2",
    src: "assests/imgs/bascet1.jpg",
    title: "مباراة كرة سلة",
    caption:
      "إقامة مباراة كرة سلة ودية في المدينة الرياضية بين الفرق المتنافسة بتنظيم وزارة الرياضة والثقافة ومشاركة فرق من الجامعة الافتراضية السورية",
    date: "12-12-2026",
    location: "دمشق",
    coords: [33.513, 36.276],
    category: "sport",
  },
  {
    id: "3",
    src: "assests/imgs/boxing1.jpg",
    title: "مباراة ملاكمة وديّة",
    caption:
      "بدء المباريات الوديّة تجهيزاً للتأهيلات في رياضة الملاكمة بين فرق الجامعات السورية بالتنسيق مع وزارة الرياضة و الشباب",
    date: "12-12-2026",
    location: "دمشق",
    coords: [33.52, 36.265],
    category: "sport",
  },
  {
    id: "4",
    src: "assests/imgs/boxing2.jpg",
    title: "معسكر تدريب تايكواندو",
    caption:
      "بتنظيم من قبل الجامعة الافتراضية وبالتعاون مع وزارة الرياضة والشبابة تم التنسيق على عمل معسكر رياضي لطلاب الجامعة الافتراضية بكافة التخصصات والبرامج",
    date: "12-12-2026",
    location: "دير الزور",
    coords: [35.333, 40.141],
    category: "sport",
  },
  {
    id: "5",
    src: "assests/imgs/ch1.jpeg",
    title: "المباراة النهائية في بطولة الشطرنج",
    caption:
      "إقامة المباراة النهائية بين المتسابقين الفائزين لتحديد من ينال الميدالية الذهبية وذلك في الصالة الرياضية في دمشق ",
    date: "12-12-2026",
    location: "دمشق",
    coords: [33.51, 36.3],
    category: "mind-games",
  },
  {
    id: "6",
    src: "assests/imgs/art.jpg",
    title: "مسرحية الملك لير للكاتب شكسبير ",
    caption:
      "تعلن الجامعة الافتراضية عن البدء بعرض مسرحية الملك لير بإخراج وتمثيل من قبل طلابها بالتنسيق مع وزارة الثقافة وذلك في دار الاوبرا",
    date: "12-12-2026",
    location: "إدلب",
    coords: [35.933, 36.633],
    category: "mind-games",
  },
  {
    id: "7",
    src: "assests/imgs/ch2.jpeg",
    title: "مباراة شطرنج",
    caption:
      "تعلن الجامعة الافتراضية عن البدء بإجراء اختبارات تدريبية لمحبي الشطرنج والذين تقييمهم في رياضة الشطرنج اقل من 1500 ELO ",
    date: "12-12-2026",
    location: "القنيطرة",
    coords: [33.125, 35.823],
    category: "mind-games",
  },
  {
    id: "8",
    src: "assests/imgs/problem1.jpg",
    title: "المسابقة البرمجية ICPC",
    caption:
      "مسابقة برمجية تقام سنوياً على مستوى جامعات القطر السوري، ستبدأ الاختبارات التأهيلية فيها على مستوى الجامعة الافتراضية السورية",
    date: "12-12-2026",
    location: "حلب",
    coords: [36.202, 37.158],
    category: "programming",
  },
  {
    id: "9",
    src: "assests/imgs/young2.jpeg",
    title: "هاكثون الحلول البرمجية لليافعين ",
    caption:
      "تبدأ فعاليات هاكثون البرمجي لليافعين ضمن الاعمار: 12 - 16 عاما بتنسيق من قبل الجامعة الافتراضية مع مدارس الجمهورية التابعة لوزارة التربية في خطوة للسعي لاكتشاف المواهب البرمجية الشابة",
    date: "12-12-2026",
    location: "درعا",
    coords: [32.625, 36.105],
    category: "programming",
  },
  {
    id: "10",
    src: "assests/imgs/problem2.jpg",
    title: " المسابقة البرمجية لليافعين",
    caption:
      "مسابقة برمجية تضم فرقاً متأهلة من الأعمار -18 بتدريب مشرفين من الجامعة الافتراضية السورية وبمشاركة الجمعية السورية للمعلوماتية",
    date: "12-12-2026",
    location: "حمص",
    coords: [34.732, 36.713],
    category: "programming",
  },
  {
    id: "11",
    src: "assests/imgs/robot2.jpeg",
    title: "مسابقة الروبوتات لليافعين",
    caption:
      "مسابقة لبرمجة الروبوتات لفئة اليافعين دون 14 عام حيث ان المسابقة تضم مشاركة 100 مشترك ضمن 20 فريقا من مختلف المحافظات",
    date: "2026-5-20",
    location: "حماة",
    coords: [35.131, 36.757],
    category: "programming",
  },
  {
    id: "12",
    src: "assests/imgs/grad.jpg",
    title: "حفل تخرج لطلاب الجامعة الافتراضية",
    caption:
      "تعلن الجامعة الافتراضية عن اقامة حفل تخرج لطلابها في الفصل S25 بحضور وزير التعليم العالي ورئيس الجامعة الافتراضية يقام الحفل في دار الاوبرا دمشق ",
    date: "12-12-2026",
    location: "دمشق",
    coords: [33.512, 36.281],
    category: "science",
  },
];

if (document.contains(document.querySelector(".events-container"))) {
  createCards(events, 3, 6, document.querySelector(".quick"));
}
// Create events cards

if (document.body.contains(document.querySelector(".main-events-container"))) {
  createCards(
    events,
    1,
    events.length,
    document.querySelector(".main-events-container"),
  );
}

if (document.body.contains(document.querySelector(".events-container"))) {
  createCards(events, 1, 5, document.querySelector(".events-container"));
  slider(document.querySelector(".slider-container"));
}
if (document.body.contains(document.querySelector(".events-container"))) {
  createCards(events, 6, 9, document.querySelector(".latest"));
  slider(document.querySelector(".slider-container3"));
}

if (document.body.contains(document.querySelector(".events-container"))) {
  createCards(events, 5, 10, document.querySelector(".quick"));
  document.querySelectorAll(".quick-access button").forEach((m) => {
    if (m.value === "sport") {
      m.onclick = () => {
        document.querySelectorAll(".quick .card").forEach((m) => m.remove());
        createCards(events, 1, 4, document.querySelector(".quick"));
        setMode();
        slider(document.querySelector(".slider-container2"));
      };
    }
    if (m.value === "mind") {
      m.onclick = () => {
        document.querySelectorAll(".quick .card").forEach((m) => m.remove());
        createCards(events, 5, 7, document.querySelector(".quick"));
        setMode();
        slider(document.querySelector(".slider-container2"));
      };
    }
    if (m.value === "programming") {
      m.onclick = () => {
        document.querySelectorAll(".quick .card").forEach((m) => m.remove());
        createCards(events, 8, 11, document.querySelector(".quick"));
        setMode();
        slider(document.querySelector(".slider-container2"));
      };
    }
  });
  slider(document.querySelector(".slider-container2"));
}

// handle details click

// Create Details Page

window.onload = () => {
  if (document.body.contains(document.querySelector(".page-container"))) {
    CreateDetailsPage();
  }
};

// Setting mode styles

let modeMode = "";

// Handle the mode switch span
document.querySelector(".mode").onclick = () => {
  document.querySelector(".mode").classList.toggle("dark");
  toggleMode();
  setMode();
};

setMode();

// Generate a search Bar
if (document.body.contains(document.querySelector(".main-events-container"))) {
  let search = document.querySelector(".search");
  let filter = document.getElementById("filter");
  let category = document.querySelectorAll(".category");
  let location = document.querySelectorAll(".location");
  let date = document.querySelectorAll(".date");

  search.addEventListener("input", () => {
    let input = search.value;
    if (filter.value === "date") {
      date.forEach((m) => {
        let dates = m.textContent;
        dates.includes(input)
          ? (m.parentNode.parentNode.style.display = "")
          : (m.parentNode.parentNode.style.display = "none");
      });
    } else if (filter.value === "location") {
      location.forEach((m) => {
        let locations = m.textContent;
        locations.includes(input)
          ? (m.parentNode.parentNode.style.display = "")
          : (m.parentNode.parentNode.style.display = "none");
      });
    } else if (filter.value === "category") {
      category.forEach((m) => {
        let categorys = m.textContent;
        categorys.includes(input)
          ? (m.parentNode.parentNode.style.display = "")
          : (m.parentNode.parentNode.style.display = "none");
      });
    }
  });
}
// check form

if (document.contains(document.querySelector(".form-control"))) {
  let email = document.querySelector(".form-control");
  let mes = document.querySelector("#exampleFormControlTextarea1");
  let submit = document.querySelector(".submit");
  let result;
  let regex = /^[0-9A-Za-z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let formAlert = document.createElement("div");
  formAlert.classList = "alert alert-warning ";
  formAlert.role = "alert";

  submit.onclick = (e) => {
    e.preventDefault();
    setTimeout(() => {
      formAlert.remove();
    }, 3000);
    if (!regex.test(email.value) && email.value.length > 0) {
      formAlert.innerText = "الإيميل خاطئ، حاول مرة أخرى";
      document.body.appendChild(formAlert);
    } else if (email.value.length === 0) {
      formAlert.innerText = "لا يوجد إيميل";
      document.body.appendChild(formAlert);
    } else if (mes.value.length === 0) {
      formAlert.innerText = "اكتب رسالة";
      document.body.appendChild(formAlert);
    } else {
      formAlert.classList = "alert alert-success ";
      formAlert.innerText = "تم الإرسال بنجاح";
      document.body.appendChild(formAlert);
      email.value = "";
      mes.value = "";
    }
  };
}

// Functions Section =>
function createCards(dataArr, start, end, target) {
  for (let i = start; i < end + 1; i++) {
    let event = dataArr[i - 1];
    var box = document.createElement("div");
    box.classList.add("card");
    box.style.width = "18rem";
    box.id = i;

    var img = document.createElement("img");
    img.src = event.src;
    img.classList.add("card-img-top");

    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.id = i;

    var title = document.createElement("div");
    title.style.fontWeight = "bold";
    title.style.margin = "10px 0";
    title.classList.add("title");
    title.innerHTML = event.title;
    var caption = document.createElement("div");
    caption.classList.add("card-text");
    caption.classList.add("caption");
    caption.innerHTML = event.caption;

    var addres = document.createElement("div");
    addres.className = "location card-text";
    addres.innerHTML = event.location;

    var date = document.createElement("card-text");
    var date = document.createElement("date");
    date.className = "date";
    date.innerHTML = event.date;

    var det = document.createElement("a");
    det.classList.add("btn-primary");
    det.classList.add("btn");
    det.classList.add("m-2");
    det.innerHTML = "التفاصيل";
    det.href = "";
    det.addEventListener("click", handleDetails);

    var category = document.createElement("div");
    category.classList.add("category");
    category.classList.add("card-text");
    category.innerHTML = event.category;

    box.appendChild(img);
    cardBody.appendChild(title);
    cardBody.appendChild(caption);
    cardBody.appendChild(addres);
    cardBody.appendChild(date);
    cardBody.appendChild(category);
    cardBody.appendChild(det);
    box.appendChild(cardBody);
    target.appendChild(box);
  }
}

function CreateDetailsPage() {
  let event = events[localStorage.getItem("id") - 1];
  var box = document.createElement("div");
  box.classList.add("d-card");

  var img = document.createElement("img");
  img.src = event.src;
  img.classList.add("d-img");

  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  var title = document.createElement("div");
  title.style.fontWeight = "bold";
  title.style.margin = "10px 0";
  title.classList.add("title");
  title.classList.add("d-title");
  title.innerHTML = event.title;

  var caption = document.createElement("div");
  caption.classList.add("card-text");
  caption.classList.add("d-caption");
  caption.innerHTML = event.caption;

  var addres = document.createElement("div");
  addres.className = "location card-text d-location";
  addres.innerHTML = event.location;

  var date = document.createElement("div");
  date.className = "d-date";
  date.innerHTML = event.date;

  var category = document.createElement("div");
  category.classList.add("d-category");
  category.classList.add("card-text");
  category.innerHTML = event.category;

  let btns = document.createElement("div");

  let share = document.createElement("button");
  share.className = "btn btn-primary";
  share.innerHTML = "شارك";
  let add = document.createElement("button");
  add.className = "btn btn-primary";
  add.innerHTML = "أضف للتقويم";
  var mapDiv = document.createElement("div");
  mapDiv.id = "map";
  mapDiv.style.height = "300px";
  mapDiv.style.width = "300px";
  mapDiv.style.marginTop = "20px";
  mapDiv.style.borderRadius = "50%";
  mapDiv.style.zIndex = "1";

  box.appendChild(img);
  cardBody.appendChild(title);
  cardBody.appendChild(caption);
  cardBody.appendChild(addres);
  cardBody.appendChild(date);
  cardBody.appendChild(category);

  btns.appendChild(share);
  btns.appendChild(add);
  cardBody.appendChild(btns);
  box.appendChild(cardBody);
  document.querySelector(".map").appendChild(mapDiv);
  document.querySelector(".page-container").append(box);

  if (event.coords) {
    setTimeout(() => {
      var map = L.map("map").setView(event.coords, 13);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap",
      }).addTo(map);

      L.marker(event.coords).addTo(map).bindPopup(event.title).openPopup();
    }, 100);
  }

  if (
    document.body.contains(document.querySelector(".page-events-container"))
  ) {
    createCards(events, 1, 5, document.querySelector(".page-events-container"));
    slider(document.querySelector(".page-slider-container"));
  }
}

function handleDetails(e) {
  e.preventDefault();
  let ind = e.currentTarget.parentNode.id;
  window.localStorage.setItem("id", ind);

  open("event.html");
}
function setMode() {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
    document.querySelector(".mode").classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
// Switch mode state
function toggleMode() {
  if (document.body.contains(document.querySelector(".mode"))) {
    if (document.querySelector(".mode").classList.contains("dark")) {
      modeMode = "dark";
    } else {
      modeMode = "light";
    }
    window.localStorage.setItem("mode", modeMode);
  }
}

function slider(container) {
  if (document.contains(container)) {
    let next = container.querySelector("#next");
    let pre = container.querySelector("#pre");
    let sliders = container.querySelectorAll(".slider .card");
    let currentIndex = 1;
    checkButton();
    showAndHide();
    function showAndHide() {
      for (let i = 1; i < sliders.length + 1; i++) {
        sliders[i - 1].id = i;
      }
      sliders.forEach((card) => {
        if (currentIndex === parseInt(card.id)) {
          card.classList.add("able");
          card.classList.remove("disable");
        } else {
          card.classList.remove("able");
          card.classList.add("disable");
          if (
            currentIndex > parseInt(card.id) &&
            card.classList.contains("disable")
          )
            card.style.transform = "translateX(-200px)";
          else if (
            currentIndex < parseInt(card.id) &&
            card.classList.contains("disable")
          ) {
            card.style.transform = "translateX(200px)";
          }
        }
        if (card.classList.contains("able")) {
          card.style.transform = "translateX(0)";
        }
      });
    }
    pre.addEventListener("click", preSlide);
    next.addEventListener("click", nextSlide);
    function checkButton() {
      if (currentIndex >= sliders.length) {
        next.style.visibility = "hidden";
        pre.style.visibility = "visible";
        pre.style.cursor = "pointer";
      } else if (currentIndex === 1) {
        pre.style.visibility = "hidden";
        next.style.visibility = "visible";
        next.style.cursor = "pointer";
      } else {
        pre.style.visibility = "visible";
        next.style.visibility = "visible";
        pre.style.cursor = "pointer";
        next.style.cursor = "pointer";
      }
    }
    function nextSlide() {
      if (currentIndex < sliders.length) {
        currentIndex += 1;
        checkButton();
        showAndHide();
      }
      checkButton();
    }
    function preSlide() {
      if (currentIndex > 1) {
        currentIndex -= 1;
        checkButton();
        showAndHide();
      }
      checkButton();
    }
  }
}
