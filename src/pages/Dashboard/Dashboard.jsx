import './Dashboard.css'
import TotalPopulation from '../../components/TotalPopulation/TotalPopulation';
import ActiveClients from '../../components/ActiveClients/ActiveClients';
import AverageAge from '../../components/AverageAge/AverageAge';
import AverageTransaction from '../../components/AverageTransactions/AverageTransaction';
import AverageMonthlyBalance from '../../components/AverageMonthlyBalance/AverageMonthlyBalance';
import Distribution from '../../components/Distribution/Distribution';
import TopComponent from '../../components/TopComponent/TopComponent';

function Dashboard() {
  
    return (
        <div className='dashboard'>
            <h3>Welcome to your Dashboard</h3>
           
            <TopComponent/>
            <div className="grid-col-two">
                <TotalPopulation />
                <ActiveClients />
            </div>

            <div className="grid-col-twoo">
                <AverageAge />
                <AverageTransaction />
            </div>
            <AverageMonthlyBalance />
            <Distribution />
        </div>
    )
}

export default Dashboard