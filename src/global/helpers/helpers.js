export const LSGet = (name) => JSON.parse(localStorage.getItem(name));

export const LSSet = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const withStrapi = (url) => `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;

export const transformPrices = (data) => {
  const mappedResult = data.map((el) => [el.attributes.city, el.attributes.categotyPrices]);
  const newData = Object.fromEntries(mappedResult);
  return newData;
};
