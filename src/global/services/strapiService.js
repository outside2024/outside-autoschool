import axios from 'axios';
import { transformPrices } from '../helpers/helpers';

class StrApi {
  #axiosClient;

  constructor() {
    this.#axiosClient = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/`,
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async getPromotions(locale) {
    try {
      const res = await this.#axiosClient.get(
        `promotion-block?populate[promotion_items][populate]=*&locale=${locale}`,
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
  }

  async getAllArticles(locale) {
    try {
      const res = await this.#axiosClient.get(
        `blog-page?populate[blog_articles][populate][textBlock][populate]=*&locale=${locale}`,
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
  }

  async getArticlesById(locale, id) {
    try {
      const res = await this.#axiosClient.get(
        `blog-articles/${id}?populate[textBlock][populate]=*&locale=${locale}`,
      );
      return res.data.data;
    } catch (error) {
      return null;
    }
  }

  async getCityPrices(city) {
    try {
      const res = await this.#axiosClient.get(`city-prices?filters[city][$eq]=${city}&populate=*`);
      return res.data.data;
    } catch (error) {
      return null;
    }
  }

  async getAllCitiesPrices() {
    try {
      const res = await this.#axiosClient.get('city-prices?populate=*');
      const result = transformPrices(res.data.data);
      return result;
    } catch (error) {
      return null;
    }
  }

  async postStudyRequest(reqBody) {
    const data = await this.#axiosClient.post('requests', reqBody);
    return data?.status;
  }
}

const StrAPIService = new StrApi();

export default StrAPIService;
