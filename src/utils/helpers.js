export const formatPrice = ({ price, curr }) => {
  let formatted = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: curr,
  }).format(price);

  const split = formatted.split("");
  const firstNumIndex = split.indexOf(split.find((num) => isFinite(+num)));

  //Retrieve the currency
  const currency = split.slice(0, firstNumIndex);

  //Retrieve the figures
  const figures = split.slice(firstNumIndex);

  //Add currency to the right side of the figures & convert result to string.
  const result = [...figures, " ", ...currency].join("");

  return result.trim();
};

export const getCurrentCoords = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos.coords);
      },
      (err) => {
        reject(err);
      }
    );
  });
};

export const preloadImage = (src) => {
  const image = new Image();
  image.src = src;
};
