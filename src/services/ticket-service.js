import axios from "axios";
import { BASE_URL } from "../config/app.config";

const API_URL = `${BASE_URL}/`

const createTicket = async (values) => {
    try {
      const token = JSON.parse(localStorage.getItem('user')).accessToken;
  
      const response = await axios.post(
        `${API_URL}ticket/create`,
        {
          title: values.title,
          description: values.description,
          ticketStatus: values.ticketStatus,
          categoryId: values.categoryId,
          userId: values.userId,
        },
        {
          headers: {
            'x-access-token': token,
          },
        }
      );
      return response;
    } catch (error) {
      if (error.response && error.response.status === 403) {
      } else {
        return error;
      }
    }
  };
  

const getTickets = async () => {
    try {
      const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;
      const res = await axios.get(API_URL + 'tickets', {
        headers: {
          'x-access-token': accessToken,
        },
      });
  
      return res.data;
    } catch (error) {
      return error;
    }
  };
  

const updateTicket = async (id, ticketStatus) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;
        const res = await axios.put(API_URL + 'ticket/update', 
          {
            id, ticketStatus 
          },
          {
            headers: {
            'x-access-token': accessToken,
          },
        });
    
        return res;
      } catch (error) {
        return error;
      }
}

const removeTicket = async (id) => {
    try {
        const accessToken = JSON.parse(localStorage.getItem('user')).accessToken;
        const res = await axios.delete(API_URL + 'ticket/destroy', {
          data: { id },
          headers: {
            'x-access-token': accessToken,
          },
        });
    
        return res;
      } catch (error) {
        return error;
      }  
}

export { createTicket, getTickets, updateTicket, removeTicket };