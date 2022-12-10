const timestampToDatetime = (timestamp) => {
  const datetime = new Date(timestamp);

  const [year, month /*, weekDay*/, day, hour, minutes] = [
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

  const getMonth = (month) => {
    let months = [
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
    return months[month];
  };

  const monthString = getMonth(month);

  const objectDatetime = {
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

  return objectDatetime;
};

export default timestampToDatetime;
