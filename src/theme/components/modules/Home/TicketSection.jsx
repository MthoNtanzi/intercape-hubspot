import {
    ModuleFields,
    TextField,
    RichTextField,
    ImageField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/hero.module.css';


export default function Services() {
    return (
        <div className={styles.ticketsSection} style={{ display: 'none' }}>
            <h1>My Tickets</h1>
            <div className={styles.ticketView}>
                <button className={styles.viewTicketsBtn}>Current & Future</button>
                <button className={styles.viewTicketsBtn}>Past</button>
            </div>
            <form className={styles.ticketBookForm}>
                <h3>No Tickets Booked</h3>
                <p>You currently don't have any tickets booked yet</p>
                <button className={styles.viewTicketsBtn}>Buy a Ticket</button>
            </form>
        </div>
    );
}