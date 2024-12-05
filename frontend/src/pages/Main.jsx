import BalanceWidget from "../components/BalanceWidget";
import ExpensesWidget from "../components/ExpensesWidget";
import LoggedNavbar from "../components/LoggedNavBar";
import styles from "./Main.module.css"

function Main() {
  return (
    
    <div>
      <LoggedNavbar />
      <BalanceWidget />
      <ExpensesWidget />

    </div>
    
  );
}   
export default Main;