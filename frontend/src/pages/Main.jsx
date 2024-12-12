import BalanceWidget from "../components/BalanceWidget";
import CardsWidget from "../components/CardsWidget";
import ExpensesWidget from "../components/ExpensesWidget";
import LoggedNavbar from "../components/LoggedNavBar";
import styles from './Main.module.css';
function Main() {
  return (
    
    <div>
      <LoggedNavbar />
      <BalanceWidget />
      <ExpensesWidget />
      <CardsWidget />

    </div>
    
  );
}   
export default Main;