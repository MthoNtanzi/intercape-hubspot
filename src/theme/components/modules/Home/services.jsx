import {
    ModuleFields,
    TextField,
    RichTextField,
    ImageField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/services.module.css';


export default function Services() {

    const services = [
        {
            title: 'Inter-connect',
            description: 'Our Inter-Connect fleet consists of Toyota Coasters, these midi-buses surpasses the size of shuttles and conventional mini-bus taxis, offering comfort and reliability for shorter routes.'
        },
        {
            title: 'Luxury Charters',
            description: 'Experience luxury travel with our premium charter service. Our luxury coaches are available for special events, corporate travel, and tour groups, ensuring comfort and style for your journey.'
        },
        {
            title: 'Parcel Services',
            description: 'Trust our reliable parcel service to deliver your packages safely and on time. We offer door-to-door delivery services across our extensive route network at competitive rates.'
        },
        {
            title: 'InterCity Travel',
            description: 'Travel between major cities with comfort and convenience. Our intercity services connect you to key destinations across South Africa and neighboring countries.'
        },
        {
            title: 'Mainliner',
            description: 'Experience comfortable travel in our mainliner coaches, equipped with reclining seats, air conditioning, and onboard entertainment for a pleasant journey.'
        },
        {
            title: 'Sleepliner',
            description: 'Travel overnight in comfort with our Sleepliner service. These coaches feature extra-wide reclining seats, individual reading lights, and air conditioning for a restful journey.'
        }
    ];

    return (
        <div className={styles.carouselDivs}>
            <div className={styles.carouselTrack}>
                {services.concat(services).map((service, index) => (
                    <div className={styles.serviceCard} key={index}>
                        <h4 className={`${styles.serviceTitle} ${styles.leanText}`}>
                            {service.title}
                        </h4>
                        <p className={styles.serviceDescription}>
                            {service.description}
                        </p>
                        <button className={styles.serviceButton}>Find out more</button>
                    </div>
                ))}
            </div>
        </div>

    );
}