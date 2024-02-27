import { User } from "./User";
import { Wallet } from "./Wallet";

export interface Transaction {
    id?: string;
    amount: number;
    createdAt?: string;
    txType: "deposit" | "withdrawal";
    balance: number;

    user?: User;
    Wallet?: Wallet;
}