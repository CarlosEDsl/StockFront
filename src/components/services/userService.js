import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';

const API_URL = config.API_URL;

class UserService {
  static async create(email, password) {
    try {
      const response = await axios.post(`${API_URL}/users`, { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async authenticate(email, password) {
    console.log("teste");
    try {
      const response = await axios.post(`${API_URL}/users/auth`, { email, password });
      if (response.data.user._id) {
        await AsyncStorage.setItem('userId', response.data.user._id);
      }
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async findById(id) {
    try {
      const response = await axios.get(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async update(id, email) {
    try {
      const response = await axios.put(`${API_URL}/users/${id}`, { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async updatePassword(id, newPassword) {
    try {
      const response = await axios.put(`${API_URL}/users/${id}/password`, { password: newPassword });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async delete(id) {
    try {
      const response = await axios.delete(`${API_URL}/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async list() {
    try {
      const response = await axios.get(`${API_URL}/users`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }

  static async getUserId() {
    try {
      const userId = await AsyncStorage.getItem('userId');
      return userId;
    } catch (error) {
      console.error('Error getting userId:', error);
      return null;
    }
  }

  static async logout() {
    try {
      await AsyncStorage.removeItem('userId');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
}

export default UserService;
