'use client'

import { apiUrl } from "@/types/NavLink";
import axios from "axios";

export const apiClient = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer `,
    },
  })