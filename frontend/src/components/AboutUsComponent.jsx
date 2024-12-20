import { Box, Typography } from "@mui/material";
import styles from "./AboutUsComponent.module.css";
import mainView from "../assets/pictures/main_view.png";

function AboutUsComponent() {
  return (
    <div className={styles.container} id="about-us">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "65%",
          }}
        >
          <img src={mainView} />
        </Box>
        <Box sx={{  width: "35%", display:'flex', alignItems:'center'}}>
          <Typography>
            [ O nas ] <br /> <br />Spendro powstało z myślą o ułatwieniu zarządzania
            codziennymi wydatkami i budżetem domowym w prosty i intuicyjny
            sposób. <br /> Naszą misją jest wspieranie ludzi w świadomym
            podejściu do finansów osobistych, aby każdy mógł osiągać swoje cele
            finansowe i lepiej planować przyszłość.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutUsComponent;
