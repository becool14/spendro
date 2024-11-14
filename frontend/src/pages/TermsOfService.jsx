import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import { List, ListItem, Container, Button } from '@mui/material';

import styles from './TermsOfService.module.css';

function TermsOfService(){
    return(
        <div className={styles.container}>
            <Navbar />
            <div className={styles.TermsOfService_Content}>
                <Typography variant="h2" sx={{ fontSize: '2.5rem', color: '#E6DEF5', marginBottom: '10px' , marginTop: '15px'}}>
                    Terms of Service
                </Typography>
                <Container sx={{ textAlign: 'Left', marginBottom: '10px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Effective Date: 14.11.2024
                    </Typography>
                </Container>
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Welcome to Spendro! By using our services, you agree to these Terms of Service ("Terms"). Please read them carefully.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    1. Acceptance of Terms
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        By accessing or using Spendro, you agree to comply with these Terms. If you do not agree, please do not use the app.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    2. Eligibility
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        To use our services, you must be at least 13 and comply with all applicable laws and regulations. If you are under the age of majority in your jurisdiction, you must have permission from a legal guardian.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    3. Account Registration
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        You may need to register for an account to access certain features of the app. When creating an account, you agree to provide accurate, complete, and current information. You are responsible for safeguarding your account information and notifying us of any unauthorized access.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    4. User Responsibilities
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Users agree not to:

                        Use the app for any illegal or unauthorized purposes.
                        Violate any applicable local, state, national, or international laws and regulations.
                        Interfere with or disrupt the app's functionality or servers.
                        Attempt to hack or compromise the security of the app.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    5. Privacy Policy
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    6. Intellectual Property
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        All content and materials in Spendro, including but not limited to text, graphics, logos, icons, images, and software, are the property of Spendro Team or its licensors and are protected by copyright, trademark, and other laws.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    7. Termination
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We may suspend or terminate your account and access to the app at any time, with or without cause or notice, including if you violate any of these Terms.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    8. Disclaimer of Warranties
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        The app is provided "as is" without warranties of any kind, either express or implied. We disclaim any and all warranties, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    9. Limitation of Liability
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        In no event shall Spendro Team or its affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including, without limitation, loss of profits, data, or goodwill, arising out of your access to or use of the app.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    10. Governing Law
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        These Terms shall be governed by the laws of Ukraine, without regard to its conflict of law principles.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    11. Changes to Terms
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We reserve the right to modify these Terms at any time. When we do, we will update the "Effective Date" above. By continuing to use the app after any changes, you agree to the new Terms.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    12. Contact Us
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '100px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        If you have any questions about these Terms, please contact us.
                    </Typography>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default TermsOfService;