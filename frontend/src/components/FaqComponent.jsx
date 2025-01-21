import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import styles from "./FaqComponent.module.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqComponent() {
  return (
    <div className={styles.container} id="faq">
      <Box>
        <Typography>[ FAQ ]</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            width: "100%",
            bgcolor: "#301269",
            borderRadius: "20px", // Zaokrąglenie całego komponentu
            overflow: "hidden", // Kluczowy element
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
              borderBottom: "1px solid rgba(255, 255, 255, 0.2)", // Delikatne oddzielenie sekcji (opcjonalnie)
            }}
          >
            <Typography sx={{ color: "white" }}>Lorem ipsum</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              bgcolor: "#301269", // Tło zgodne z głównym kolorem
            }}
          >
            <Typography sx={{ color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}

export default FaqComponent;
