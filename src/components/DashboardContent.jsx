const DashboardContent = () => {
    const totalInvestment = 5000;
    const profit = 250;
    const futureValue = 7500;
  
 
  
    return (
      <div className="dashboard-content">
        <div className="overview  ">
          <div className="card">
            <h3>Total Investment</h3>
            <p>${totalInvestment.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Profit</h3>
            <p>${profit.toLocaleString()}</p>
          </div>
          <div className="card">
            <h3>Future Value</h3>
            <p>${futureValue.toLocaleString()}</p>
          </div>
        </div>
      </div>
    );
  };

  export default DashboardContent