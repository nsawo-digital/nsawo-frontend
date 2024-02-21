'use server'
import { User } from "@/types/User";
import { cookies } from "next/headers";

export default async function getAuthenticatedUser() {
    let authenticatedUser: User = {
        username: 'Not Set',
        email: 'Not Set',
    }
    
    const storedUser = cookies().get('user')?.value
    return storedUser;
    if (storedUser) {
      authenticatedUser = <User>JSON.parse(storedUser);
    }
    return authenticatedUser;
}
