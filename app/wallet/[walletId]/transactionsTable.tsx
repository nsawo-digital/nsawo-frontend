import { Transaction } from "@/types/Transaction";

export default function TransactionsTable({transactions}: {transactions: Transaction[]}){
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Recent transactions
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">This is the complete list of deposits and withdrawals made on this wallet.</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Tx type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Amount
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Balance
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ?
                    transactions.map(t =>               
                    <tr key={t.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {t.txType}
                        </th>
                        <td className="px-6 py-4">
                            {t.amount}
                        </td>
                        <td className="px-6 py-4">
                            {t.balance}
                        </td>
                        <td className="px-6 py-4">
                            {t.createdAt}
                        </td>
                    </tr>
                    ):
                    <p className="text-green-500 text-center">No transactions recorded yet</p>
                    }
                </tbody>
            </table>
        </div>
    )
}
