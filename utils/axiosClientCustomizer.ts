'use client'
import Cookies from "js-cookie";
import axios from "axios";

const token = Cookies.get('access_token')
export const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
  })