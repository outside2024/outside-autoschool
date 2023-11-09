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

  async getPromotionsContent(locale) {
    const { data } = await this.#axiosClient.get(
      `promotion-block?populate[promotion_items][populate]=*&locale=${locale}`,
    );
    return data;
  }
}

const StrAPIService = new StrApi();

export default StrAPIService;
