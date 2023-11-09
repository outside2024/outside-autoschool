import axios from 'axios';

class StrApi {
  #axiosClient;

  constructor() {
    this.#axiosClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getPromotions(locale) {
    const { data } = await this.#axiosClient.get(
      `promotion-block?populate[promotion_items][populate]=*&locale=${locale}`,
    );
    return data;
  }

  async getAllArticles(locale) {
    const { data } = await this.#axiosClient.get(
      `blog-page?populate[blog_articles][populate][textBlock][populate]=*&locale=${locale}`,
    );
    return data;
  }

  async getArticlesById(locale, id) {
    const { data } = await this.#axiosClient.get(
      `blog-articles/${id}?populate[textBlock][populate]=*&locale=${locale}`,
    );
    return data;
  }

  async getCityPrices(city) {
    const { data } = await this.#axiosClient.get(
      `city-prices?filters[city][$eq]=${city}&populate=*`,
    );
    return data;
  }

  async getAllCitiesPrices() {
    const { data } = await this.#axiosClient.get('city-prices?populate=*');
    return data;
  }

  async postStudyRequest(reqBody) {
    const data = await this.#axiosClient.post('requests', reqBody);
    return data?.status;
  }
}

const StrAPIService = new StrApi();

export default StrAPIService;
