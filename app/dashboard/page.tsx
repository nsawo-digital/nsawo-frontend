'use server'
import { getSession } from "@/utils/authContext";
import { handleDigitalMigration } from "../login/communicator";


export default async function Home(){

    const session = await getSession()
    console.log('pwd: ' + session.authenticatedUser.id)
    return(
        <div className="">
            Dashboard
            <form action={handleDigitalMigration}>
                <input type="submit" name="seed" value={'seed'}/>
            </form>
        </div>
    );
}
