import styles from '../../../styles/book.module.css';

export default function BookAt() {
    const partners = [
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/11/boxer.png",
            alt: "Boxer Superstores Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/09/Computicket-Logo-16.jpg",
            alt: "Computicket Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/07/ticket-pro-logo-1.png",
            alt: "Ticket Pro Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/usave.png",
            alt: "Usave Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/spar.png",
            alt: "Spar Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/shopright.png",
            alt: "Shoprite Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/pnp.png",
            alt: "Pick n Pay Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/choppies-logo.png",
            alt: "Choppies Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/checkers-logo.png",
            alt: "Checkers Logo"
        },
        {
            logo: "https://www.intercape.co.za/wp-content/uploads/2023/02/blu.png",
            alt: "Blu Approved Logo"
        }
    ];


    return (
        <div className={styles.loyaltyProgramme}>
            <h2 className={styles.offerTitle}>BOOK AT</h2>
            <h3 className={styles.featureTitle}>our partners</h3>
            <div className={styles.carouselTrack}>
                {partners.map((partner, index) => (
                    <div key={index} className={styles.partnerCard}>
                        <div className={styles.logoWrapper}>
                            <img 
                                src={partner.logo} 
                                alt={partner.alt} 
                                className={styles.partnerLogo}
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}