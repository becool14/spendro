import { Box, Typography } from "@mui/material";
import styles from "./AboutUsComponent.module.css";
import mainView from "../assets/pictures/main_view.png";
import cards from "../assets/pictures/cards.png";

function AboutUsComponent() {
  return (
    <div className={styles.container} id="about-us">
      {/* about us section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap:'80px',
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "65%",
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
          }}
        >
          <img src={mainView} width="100%"/>
        </Box>
        <Box sx={{ width: "35%", display: "flex", alignItems: "center" }}>
          <Typography>
            [ O nas ] <br /> <br />
            Spendro powstało z myślą o ułatwieniu zarządzania codziennymi
            wydatkami i budżetem domowym w prosty i intuicyjny sposób. <br />{" "}
            Naszą misją jest wspieranie ludzi w świadomym podejściu do finansów
            osobistych, aby każdy mógł osiągać swoje cele finansowe i lepiej
            planować przyszłość.
          </Typography>
        </Box>
      </Box>

      {/* our mission section */}
      <Box
        sx={{
          bgcolor: "#5820BE",
          width: "95%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          padding: "10px 90px 30px 90px",
          gap: "20px",
          borderRadius: "20px",
          mt:'70px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={cards} width="100%" />
        </Box>
        <Box>
          <Typography>[ Nasza misja ]</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10%",
          }}
        >
          <Typography sx={{ width: "45%" }}>
            Wierzymy, że dobre zarządzanie finansami osobistymi zaczyna się od
            jasnego obrazu tego, na co wydajemy nasze pieniądze. Spendro
            umożliwia szybkie i wygodne monitorowanie wydatków oraz pomaga
            użytkownikom zrozumieć ich nawyki finansowe.
          </Typography>

          <Typography sx={{ width: "45%" }}>
            Dążymy do tego, aby nasza aplikacja była czymś więcej niż tylko
            narzędziem – chcemy, aby była wsparciem na drodze do poprawy
            kondycji finansowej i realizacji długoterminowych planów.
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default AboutUsComponent;
