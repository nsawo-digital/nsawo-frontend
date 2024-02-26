'use server'
import { apiUrl } from "@/types/NavLink";
import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get('access_token')?.value
export const api = axios.create({
    baseURL: apiUrl,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || ''}`,
    },
  })