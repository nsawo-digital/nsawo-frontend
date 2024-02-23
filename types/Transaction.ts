import { User } from "./User";
import { Wallet } from "./Wallet";

export interface Transaction {
    id: string;
    user_id: string;
    wallet_id: string;
    amount: number;
    created_at: Date;
    tx_type: "deposit" | "withdrawal";
    balance: number;

    user: User;
    Wallet: Wallet;
}