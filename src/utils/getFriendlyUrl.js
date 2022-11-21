// const stringUrl = (string) => {
//   return string
//     .normalize("NFD")
//     .replace(
//       /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
//       "$1"
//     )
//     .normalize()
//     .toLowerCase()
//     .split(" ")
//     .join("-");
// };

// const getFriendlyUrl = (string) => {
//   // Definimos los caracteres que queremos eliminar
//   let specialChars = '¡!@#$^&%*()+=-[]/{}|:<>¿?,;._"ºª·~€`´¨';

//   // Los eliminamos todos
//   for (let i = 0; i < specialChars.length; i++) {
//     string = string.replace(new RegExp("\\" + specialChars[i], "gi"), "");
//   }

//   // Lo queremos devolver limpio en minusculas
//   string = string.toLowerCase();

//   // Quitamos espacios y los sustituimos por -
//   string = string.replace(/ /g, "-");

//   // Quitamos acentos y "ñ". Fijate en que va sin comillas el primer parametro
//   string = string.replace(/á/g, "a");
//   string = string.replace(/é/g, "e");
//   string = string.replace(/í/g, "i");
//   string = string.replace(/ó/g, "o");
//   string = string.replace(/ú/g, "u");
//   string = string.replace(/ñ/g, "n");

//   const friendlyUrl = string;
//   return friendlyUrl;
// };

const getFriendlyUrl = (string) => {
  const friendlyUrl = string
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

  return friendlyUrl;
};

export default getFriendlyUrl;
