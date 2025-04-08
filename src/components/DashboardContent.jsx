import { FaBtc } from "react-icons/fa6";
const DashboardContent = () => {
    const totalInvestment = 415333;
    const profit = 414687;
    const futureValue = 3167;
  
 
  
    return (
      <div className="dashboard-content">
        <div className="overview  ">
          <div className="card">
            <h3>Total Assets</h3>
            <p>${totalInvestment.toLocaleString()}</p>
          </div>
          <div className="card" >
            <div className="flex items-center justify-center">
          <FaBtc color="" />
          <h3> BTC</h3>
          </div>
            <p>${profit.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Ethereum</h3>
            <p>${futureValue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };

  export default DashboardContent