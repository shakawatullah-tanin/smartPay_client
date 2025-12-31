import { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthContext";

const History = () => {
  const { paymentHistory } = useContext(AuthContext);

  return (
    <div className="max-w-3xl mx-auto my-10 p-4 common-shadow">
      <h2 className="text-xl font-bold mb-4">Payment History</h2>

      {paymentHistory.length === 0 ? (
        <p>No payment yet</p>
      ) : (
        paymentHistory.map(p => (
          <div key={p.id} className="border-b py-2">
            <p>{p.organization} ({p.bill_type})</p>
            <p>Taka : {p.amount}</p>
            <p className="text-xs text-gray-500">{p.time}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
