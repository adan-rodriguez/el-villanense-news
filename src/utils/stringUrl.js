const stringUrl = (string) => {
  return string
    .normalize("NFD")
    .replace(
      /([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,
      "$1"
    )
    .normalize()
    .toLowerCase()
    .split(" ")
    .join("-");
};

export default stringUrl;
