'use server'
import { handleDigitalMigration } from "../login/communicator";


export default async function Home(){

    return(
        <div className="">
            Dashboard
            <form action={ () => handleDigitalMigration}>
                <input type="submit" name="seed" value={'seed'}/>
            </form>
        </div>
    );
}
