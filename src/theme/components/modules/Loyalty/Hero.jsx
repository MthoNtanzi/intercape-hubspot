import styles from '../../../styles/loyaltyStyles/hero.module.css';

export default function Hero () {
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <img src="https://www.intercape.co.za/wp-content/uploads/2025/08/IC_Loyalty_Program_Phase_3_Right_Desktop.webp" alt="Hero Background" />
            </div>
            <div className={styles.rightSide}>
                <img src="https://www.intercape.co.za/wp-content/uploads/2025/08/IC_Loyalty_Program_Phase_2_Web_Banner_Right_Mobile_1.webp" alt="Journey for rewards" />
            </div>
        </div>
    );
}