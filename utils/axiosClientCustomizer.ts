'use client'

import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://nsawo-api-0012ac0b0a14.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
  })