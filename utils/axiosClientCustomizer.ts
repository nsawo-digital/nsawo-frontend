'use client'

import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://nsawo-api-0012ac0b0a14.herokuapp.com/user/wallets/26acbfb5-9606-445c-997c-6bf3dd1c0968',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
  })