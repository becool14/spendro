import { Box, Typography } from "@mui/material";
import styles from "./AboutUsComponent.module.css";
import mainView from "../assets/pictures/main_view.png";
import cards from "../assets/pictures/cards.png";
import circles from "../assets/icons/panel_icons/circles.png";
import key from "../assets/icons/panel_icons/key.png";
import individual from "../assets/icons/panel_icons/individual.png";
import walk from "../assets/icons/panel_icons/walk.png";

function AboutUsComponent() {
  return (
    <div className={styles.container} id="about-us">
      {/* about us section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "80px",
          width: "85%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            width: "65%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={mainView} width="100%" />
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
          mt: "70px",
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

      {/* why spendro */}
      <Box
        sx={{
          mt: "120px",
          mx: "auto",
          width: "85%",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography>[ Dlaczego Spendro? ]</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box className={styles.purplePanel}>
              <img src={circles} />
              <Typography>
                <Typography variant="h6">Prostota i intuicyjność</Typography>
                Spendro zostało zaprojektowane tak, aby każdy mógł z łatwością
                śledzić swoje wydatki i analizować budżet.
              </Typography>
            </Box>
            <Box className={styles.purplePanel}>
              <img src={key} />
              <Typography>
                <Typography variant="h6">Bezpieczeństwo danych</Typography>
                Zdajemy sobie sprawę, jak ważna jest prywatność i
                bezpieczeństwo. Dlatego stosujemy najnowocześniejsze
                technologie, aby zapewnić ochronę wszystkich danych
                użytkowników.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box className={styles.purplePanel}>
              <img src={individual} />
              <Typography>
                <Typography variant="h6">Indywidualne podejście</Typography>
                Rozumiemy, że każdy użytkownik ma inne potrzeby finansowe,
                dlatego oferujemy wiele opcji dostosowywania kategorii wydatków
                oraz raportów.
              </Typography>
            </Box>
            <Box className={styles.purplePanel}>
              <img src={walk} />
              <Typography>
                <Typography variant="h6">Ciągły rozwój</Typography>
                Regularnie aktualizujemy aplikację i wprowadzamy nowe funkcje,
                aby jeszcze lepiej spełniała oczekiwania naszych użytkowników.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* our team */}
      <Box
        sx={{
          mt: "120px",
          mx: "auto",
          width: "85%",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography variant="h5" sx={{ width: "25%" }}>
              [ Nasz zespół ]
            </Typography>
            <Typography sx={{ width: "75%" }}>
              Jesteśmy grupą pasjonatów finansów, technologii i nowoczesnych
              rozwiązań, których wspólnym celem jest rozwój narzędzi
              pomagających w świadomym zarządzaniu budżetem. Każdego dnia
              pracujemy nad tym, aby Spendro spełniało potrzeby naszych
              użytkowników i pomagało im w prowadzeniu bardziej zrównoważonego
              życia finansowego.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box className={styles.teamMember}>
            <Box className={styles.teamMemberPhoto}> </Box>
            <Typography>
                <Typography variant="h5"> Imie i nazwisko</Typography>
                stanowisko
            </Typography>
          </Box>
          <Box className={styles.teamMember}>
            <Box className={styles.teamMemberPhoto}> </Box>
            <Typography>
                <Typography variant="h5"> Imie i nazwisko</Typography>
                stanowisko
            </Typography>
          </Box>
          <Box className={styles.teamMember}>
            <Box className={styles.teamMemberPhoto}> </Box>
            <Typography>
                <Typography variant="h5"> Imie i nazwisko</Typography>
                stanowisko
            </Typography>
          </Box>
          <Box className={styles.teamMember}>
            <Box className={styles.teamMemberPhoto}> </Box>
            <Typography>
                <Typography variant="h5"> Imie i nazwisko</Typography>
                stanowisko
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default AboutUsComponent;
