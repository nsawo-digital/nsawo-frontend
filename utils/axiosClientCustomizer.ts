'use client'

import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
  })