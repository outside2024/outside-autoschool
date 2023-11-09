import mockData from "../../__mocks__/discountData.json";

async function getDiscountData() {
  const response = mockData;

  return response.data.attributes.promotion_items.data;
}

export default getDiscountData;