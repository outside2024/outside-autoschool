export const LSGet = (name) => JSON.parse(localStorage.getItem(name));

export const LSSet = (name, data) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const withStrapi = (url) => `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
