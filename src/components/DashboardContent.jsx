import { FaBtc } from "react-icons/fa6";
const DashboardContent = () => {
    const totalInvestment = 384000;
    const profit = 383987;
    const futureValue = 14;
  
 
  
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
            <h3>Other</h3>
            <p>${futureValue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };

  export default DashboardContent