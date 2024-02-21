'use server'

import { User } from "@/types/User"
import { apiUrl } from "@/types/NavLink";
import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { encrypt } from "@/utils/authContext";

export async function handleSignUp (prevState: any, formData: FormData){
    let user: User = {
        username: <string>formData.get('username'),
        email: <string>formData.get('email'),
        password: <string>formData.get('password'),
    };

    const repeatedPassword = formData.get('repeatedPassword');
    if(user.password && user.password !== repeatedPassword){
        return "The 2 passwords still don't match"
    }

    let authenticatedUser = {}

    let message = 'Not submited'
    await axios.post(`${apiUrl}/user`, user)
    .then( response => {
        if(response.status === 200){
            console.log(response.data);
            const token = response.data.access_token
            authenticatedUser = response.data.user
            cookies().set('access_token', token, { expires: new Date(Date.now() + 480 * 1000), httpOnly: true })
            message = 'success'
        }else{
            console.log(response.data)
            message = response.data.message
        }
    }).catch( error => {
        if(error.response){ 
            message = error.response.data.message 
            console.log(error)
        }else{
            message = 'Failed to connect to backend server, please try again'
            console.log(error)
        }
    })
        
    if(message === 'success'){
        // Create the session
        const expires = new Date(Date.now() + 480 * 1000);
        const session = await encrypt({ authenticatedUser, expires });
    
        // Save the session in a cookie
        cookies().set("session", session, { expires, httpOnly: true });
        redirect('/dashboard')
    }
    return message
}