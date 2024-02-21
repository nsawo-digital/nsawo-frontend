'use server'
import { apiUrl } from "@/types/NavLink";
import axios from "axios";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { encrypt } from "@/utils/authContext";
import { api } from "@/utils/axiosCustomizer";

export async function handleLogin(prevState: any, formdata: FormData){

    let authenticatedUser = {}

    const requestObject = {username: formdata.get('username'), password: formdata.get('password')}
    let message = 'Not submited'
    await axios.post(`${apiUrl}/auth/login`, requestObject)
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

export async function handleLogout(){
    cookies().set('access_token', '', {expires: new Date(0)});
    cookies().set("session", "", { expires: new Date(0) });
    redirect('/login')
}

export async function handleDigitalMigration(){
    await api.get('/digital-currency')
    .then(r => {
        console.log(r)
    }).catch(e => {
        console.error(e)
    })
}