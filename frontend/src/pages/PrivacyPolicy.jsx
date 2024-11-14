import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Typography from '@mui/material/Typography';
import { List, ListItem, Container, Button } from '@mui/material';

import styles from './PrivacyPolicy.module.css';

function PrivacyPolicy(){
    return(
        <div className={styles.container}>
            <Navbar />
            <div className={styles.TermsOfService_Content}>
                <Typography variant="h2" sx={{ fontSize: '2.5rem', color: '#E6DEF5', marginBottom: '10px' , marginTop: '15px'}}>
                    Privacy Policy
                </Typography>
                <Container sx={{ textAlign: 'Left', marginBottom: '10px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Effective Date: 14.11.2024
                    </Typography>
                </Container>
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Spendo Team ("we," "us," or "our") operates the Spendro mobile application (the "App"). This Privacy Policy explains how we collect, use, and protect your information.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    1. Information We Collect
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We may collect the following types of information:

                        Personal Information: Information you provide when creating an account or interacting with our services, such as your name, email address, and contact details.
                        Usage Data: Information about how you use the App, such as the pages or features you access, the time spent, and the actions taken.
                        Device Information: Information about your device, such as device type, operating system, unique device identifiers, and IP address.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    2. How We Use Your Information
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We use your information to:

                        Provide and improve our services;
                        Personalize your experience;
                        Communicate with you regarding updates, promotions, or customer support;
                        Analyze usage trends to enhance the Apps functionality;
                        Ensure security and detect potential risks or fraud.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    3. Sharing Your Information
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We may share your information with third parties in the following situations:

                        Service Providers: We may share your data with third-party vendors who assist in operating the App.
                        Legal Requirements: We may disclose information if required by law or in response to valid requests by public authorities.
                        Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owners.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    4. Data Security
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We take reasonable measures to protect your information. However, no electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    5. Your Rights and Choices
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Depending on your location, you may have certain rights regarding your personal information:

                        Access: You may request a copy of the information we hold about you.
                        Correction: You may ask us to correct any inaccurate information.
                        Deletion: You may request deletion of your data, subject to certain exceptions.
                        Opt-Out: You can opt out of certain data collection practices, such as marketing emails.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    6. Cookies and Tracking Technologies
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We may use cookies and similar technologies to improve your experience. You may adjust your browser settings to refuse cookies, though this may affect some functionality of the App.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    7. Childrens Privacy
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        Our App is not intended for children under 16. We do not knowingly collect personal information from children. If you believe we have collected such information, please contact us to remove it.
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    8. Changes to this Privacy Policy
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        We may update this Privacy Policy from time to time. Changes will be posted within the App, and we encourage you to review the policy periodically
                    </Typography>
                </Container>
                <Typography variant="h3" sx={{ fontSize: '1.5rem', color: '#E6DEF5', marginBottom: '15px' }}>
                    9. Contact Us
                </Typography>   
                <Container sx={{ textAlign: 'Left', marginBottom: '70px' }}>
                    <Typography variant="body1" className={styles.text_section}>
                        If you have questions or concerns about this Privacy Policy, please contact us at following page 
                    </Typography>
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;