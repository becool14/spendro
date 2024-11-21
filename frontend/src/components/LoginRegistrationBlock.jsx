import { Box,  Typography } from '@mui/material';
import styles from './LoginRegistrationBlock.module.css'
function LoginRegistrationBlock (){
    return(
        <div>
            <Box className={styles.main_content}>
                <Typography sx={{ fontSize:50, fontWeight:'bold', textAlign:'left'}} className={styles.centerText}>
                Spendro is an universal<br></br> banking service of a<br></br> new generation
                </Typography>
            </Box>
        </div>
    );
}

export default LoginRegistrationBlock;