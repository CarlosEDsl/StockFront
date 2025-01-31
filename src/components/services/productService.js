import axios from 'axios';
import config from '../../config';
import UserService from './userService';

const API_URL = config.API_URL;

class ProductService {

    static async create(product) {
        try {
            product.userId = await UserService.getUserId();
            const response = await axios.post(`${API_URL}/products`, product);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error.response?.data || error.message;
        }
    }

    static async findById(id) {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async update(id, product) {
        try {
            product.userId = await UserService.getUserId();
            const response = await axios.put(`${API_URL}/products/${id}`, product);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async delete(id) {
        try {
            console.log("Teste delecao: ", id)
            const response = await axios.delete(`${API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async list(userId) {
        try {
            const response = await axios.get(`${API_URL}/products/list/${userId}`, {});
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async addStock(id, quantity) {
        try {
            const response = await axios.post(`${API_URL}/products/${id}/stock/add`, {
                quantity: quantity
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async removeStock(id, quantity) {
        try {
            const response = await axios.post(`${API_URL}/products/${id}/stock/remove`, {
                quantity: quantity
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }

    static async checkAvailability(id) {
        try {
            const response = await axios.get(`${API_URL}/products/${id}/availability`);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    }
}

export default ProductService;
