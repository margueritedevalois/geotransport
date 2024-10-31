import axios from 'axios';

const clientNumber = '1011015981';
const clientKey = '902276cd-0039-45c5-bc18-46825a4aa557';
const baseURL = 'https://ws.dpd.ru/services/';

const dpdService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const calculateShippingCost = async (params: any) => {
  const requestBody = {
    request: {
      auth: {
        clientNumber,
        clientKey,
      },
      ...params,
    },
  };

  try {
    const response = await dpdService.post('calculator2?wsdl', requestBody);
    return response.data;
  } catch (error) {
    console.error('Error calculating shipping cost:', error);
    throw error;
  }
};

export const createOrder = async (orderDetails: any) => {
  const requestBody = {
    request: {
      auth: {
        clientNumber,
        clientKey,
      },
      ...orderDetails,
    },
  };

  try {
    const response = await dpdService.post('order2?wsdl', requestBody);
    return response.data;
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
