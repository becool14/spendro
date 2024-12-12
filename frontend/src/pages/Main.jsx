import BalanceWidget from "../components/BalanceWidget";
import CardsWidget from "../components/CardsWidget";
import ExpensesWidget from "../components/ExpensesWidget";
import LoggedNavbar from "../components/LoggedNavBar";
import styles from './Main.module.css';
import BalanceChart from "../components/BalanceChart";
import { Box } from "@mui/material";
function Main() {
  return (
    <Box >
      <LoggedNavbar />
      <BalanceWidget />
      <ExpensesWidget />
      <CardsWidget />

    </div>
    
      <Box className={styles.mainContainer}>
        <Box className={styles.leftColumn}>
          <BalanceWidget />
          <ExpensesWidget />
        </Box>
        <Box className={styles.centerColumn}>
          <BalanceChart />
        </Box>
      </Box>
    </Box>
  );
}   
export default Main;