import {
    ModuleFields,
    TextField,
    RichTextField,
    ImageField,
} from '@hubspot/cms-components/fields';
import styles from '../../../styles/hero.module.css';


export default function Services() {
    return (
        <form className={styles.profileSection}>
            <h3>Log In or Create Account</h3>
            <h4>Lets find your account</h4>
            <p>Enter your cellphone number or email to sign in or create a new account. Click 'Get Started' to continue.</p>
            <input type='number' className={styles.inputFieldProfile} placeholder="Cellphone Number" />
            <p>and/or</p>
            <input type='email' className={styles.inputFieldProfile} placeholder="Email Address" />
            <input type='button' className={styles.getStartedProfileBtn} value='Get Started' />
            <p className={styles.loyaltyProgramme}>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="10" fill="#7467EE" fillOpacity="0.3" /><path d="M10.15 6.16667C9.81667 6.16667 9.53889 6.06667 9.31667 5.86667C9.10556 5.65556 9 5.39444 9 5.08333C9 4.77222 9.10556 4.51667 9.31667 4.31667C9.53889 4.10556 9.81667 4 10.15 4C10.4833 4 10.7556 4.10556 10.9667 4.31667C11.1889 4.51667 11.3 4.77222 11.3 5.08333C11.3 5.39444 11.1889 5.65556 10.9667 5.86667C10.7556 6.06667 10.4833 6.16667 10.15 6.16667ZM9.26667 16V7.73333H11.0333V16H9.26667Z" fill="#7467EE" /></svg>
                </span>
                <span>&nbsp;&nbsp;Loyalty Programme Rewards</span>
            </p>

        </form>
    );
}