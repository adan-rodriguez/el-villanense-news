import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { getLastArticle } from "../firebase/firebaseService";

const timestampToDatetime = (timestamp) => {
  const datetime = new Date(timestamp);

  const [year, month /* , weekDay */, day, hour, minutes] = [
    datetime.getFullYear(),
    datetime.getMonth(),
    // datetime.getDay(),
    datetime.getDate(),
    datetime.getHours(),
    datetime.getMinutes(),
  ];

  //   const getWeekDay = (weekDay) => {
  //     let days = [
  //       "Domingo",
  //       "Lunes",
  //       "Martes",
  //       "Miércoles",
  //       "Jueves",
  //       "Viernes",
  //       "Sábado",
  //     ];
  //     return days[weekDay];
  //   };

  //   const weekDayString = getWeekDay(weekDay);

  const getMonth = (n) => {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    return months[n];
  };

  const monthString = getMonth(month);

  return {
    datetimeAttribute: `${year}-${
      String(month).length === 1 ? 0 : ""
    }${month}-${String(day).length === 1 ? 0 : ""}${day}T${
      String(hour).length === 1 ? 0 : ""
    }${hour}:${String(minutes).length === 1 ? 0 : ""}${minutes}-03:00`,
    dateContent: `${
      String(day).length === 1 ? 0 : ""
    }${day} de ${monthString} de ${year}`,
    datetimeContent: `${
      String(day).length === 1 ? 0 : ""
    }${day} de ${monthString} de ${year} - ${
      String(hour).length === 1 ? 0 : ""
    }${hour}:${String(minutes).length === 1 ? 0 : ""}${minutes}`,
  };
};

const getFriendlyUrl = (string) => {
  string
    .replace(/\s/g, "_")
    .toLowerCase()
    .replace(/á/g, "a")
    .replace(/é/g, "e")
    .replace(/í/g, "i")
    .replace(/ó/g, "o")
    .replace(/ú/g, "u")
    .replace(/ñ/g, "n")
    .replace(/\W/g, "")
    .replace(/_/g, "-");
};

const prepareDataForFirebase = (article, timestamp) => ({
  ...article,
  timestamp,
  ...timestampToDatetime(timestamp),
  friendlyUrl: getFriendlyUrl(article.title),
});

const sendArticleUploadToSessionStorage = async () => {
  const articleUpload = await getLastArticle();
  const articles = JSON.parse(sessionStorage.getItem("articles"));
  articles.unshift(articleUpload);
  sessionStorage.setItem("articles", JSON.stringify(articles));
};

export default async function addArticleToFirestore(article) {
  const dataForFirebase = prepareDataForFirebase(article, Date.now());

  await setDoc(
    doc(
      db,
      "articles",
      `${dataForFirebase.friendlyUrl}-${dataForFirebase.timestamp}`
    ),
    dataForFirebase
  );

  sessionStorage.articles && (await sendArticleUploadToSessionStorage());
}
