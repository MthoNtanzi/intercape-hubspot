import {
  ModuleFields,
  TextField,
  RichTextField,
  ImageField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/services.module.css';


export default function Services(){
    return(
        <div className={styles.servicesDiv}>
            <div>
                <h2>We Offer</h2>
                <h3>services</h3>
            </div>
            <div className={styles.carouselDivs}>
                <div className={styles.serviceCard}>
                    <h4 className={`${styles.serviceTitle} ${styles.leanText}`}>Inter-connect</h4>
                    <p className={styles.serviceDescription}>Our Inter-Connect fleet consists of Toyota Coasters, these midi-buses surpasses the size of shuttles and conventional mini-bus taxis.</p>
                    <button className={styles.serviceButton}>Find out more</button>
                </div>
            </div>
        </div>
    );
}