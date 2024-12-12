import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import monoLogo from '../assets/icons/mono_logo.png';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from './CardsWidget.module.css'

const CarouselWidget = () => {
  const [cachedClientInfo, setClientInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/mono/client_info");
        const data = await response.json();
        setClientInfo(data);
      } catch (error) {
        console.error("Error loading data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClientInfo();
  }, []);

  if (loading) {
    return (
      <Box sx={{ padding: 2, backgroundColor: "#121212" }}>
        <Typography variant="h6" color="white">Loading client info...</Typography>
      </Box>
    );
  }

  if (!cachedClientInfo) {
    return (
      <Box sx={{ padding: 2, backgroundColor: "#121212" }}>
        <Typography variant="h6" color="white">Failed to load client info.</Typography>
      </Box>
    );
  }

  const getCurrencyName = (currencyCode) => {
    const currencyMap = {
      UAH: "Ukrainian Hryvnia",
      PLN: "Polish Zloty",
      USD: "US Dollar",
      EUR: "Euro",
    };
    if(currencyCode === 980){
        return 'UAH'
    }
    if(currencyCode === 978){
        return 'EUR'
    }
    if(currencyCode === 840){
        return 'USD'
    }
    if(currencyCode === 985){
        return 'PLN'
    }

    return currencyMap[currencyCode] || currencyCode;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: false,  // Не используйте centerMode, так как он создает отступы
    focusOnSelect: true, // Для более точного выбора слайдов
  };

  return (
    <Box sx={{ maxWidth: "100%", padding: 2, backgroundColor: "#121212" }}>
      <Typography variant="h6" color = "#F0EBFA" gutterBottom sx = {{fontSize: 16}}>
        My cards
      </Typography>
      <Slider {...settings} className={styles.carousel}>
        {cachedClientInfo.accounts.map((account, index) => (
          <div key={index} className={styles.carouselItem}>
            <Card
              sx={{
                maxWidth: 414,
                maxHeight:123.5,
                margin: "0 6px",
                backgroundColor: "#1E1E1E",
                color: "white",
                borderTopLeftRadius: 20.76,  // Сглаживаем только верхний левый угол
                borderTopRightRadius: 20.76,  // Сглаживаем только верхний правый угол
                borderBottomLeftRadius: 20.76,  // Сглаживаем только нижний левый угол
                borderBottomRightRadius: 20.76,  // Сглаживаем только нижний правый угол
                padding: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                '@media (max-width: 768px)': {
                  maxWidth: '100%',  // Сжимаем карточки для мобильных устройств
                },
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#F0EBFA" }}>
                <img src={monoLogo} alt="Bank Logo" style={{ width: 54, height: 54, marginBottom: 18.67 }} />
                <Typography variant="h6" color="#F0EBFA" sx={{ fontFamily: 'Varela Round', fontSize: '14.5px' }}>
                  {account.bankName || "Mono Bank"}
                </Typography>
              </Box >
              <Box sx={{ display: 'flex', flexDirection: 'column',  color: "#F0EBFA" }}>
                    <Typography variant="body2" sx={{ fontSize: '16.61px', fontFamily: 'Varela Round', marginTop: -5 }}>
                        {account.pan}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '16.61px', fontFamily: 'Varela Round', textAlign: "left", color: "#9C9C9C" }}>
                        {getCurrencyName(account.currency)}
                    </Typography>
                </Box>
              <Box sx={{ textAlign: "Left",  color: "#F0EBFA" }}>
                <Typography variant="h6" color="#9C9C9C" sx={{ fontFamily: 'Varela Round', fontSize: '12.46px' }}>
                  balance
                </Typography>
                <Typography variant="h6" color="#F0EBFA" sx={{ fontFamily: 'Varela Round', fontSize: '20.76px' }}>
                  {account.balance} {getCurrencyName(account.currency)}
                </Typography>

                <Button variant="text" sx={{ color: "#F0EBFA", mt: 1 }}>
                    <Typography variant="h6" color="#F0EBFA" sx={{ fontFamily: 'Varela Round', fontSize: '12.46px', marginLeft: -1, marginTop: 1}}>
                        Show More
                        <ArrowOutwardIcon sx={{ fontSize: '12.46px'}} />
                    </Typography>
                </Button>
              </Box>
            </Card>
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CarouselWidget;
