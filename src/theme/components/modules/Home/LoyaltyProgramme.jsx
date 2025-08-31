import styles from '../../../styles/loyalty.module.css';

export default function LoyaltyProgramme() {
    const loyaltyOffers = [
        {
            title: "Welcome Bonus",
            description: "Get 500 points instantly when you join our loyalty programme. Use these points towards your next journey.",
            points: 500,
            type: "signup"
        },
        {
            title: "Birthday Travel",
            description: "Enjoy a 20% discount on any route during your birthday month. Travel in style on your special day.",
            discount: 20,
            type: "birthday"
        },
        {
            title: "Point Multiplier Days",
            description: "Earn 2x points when you travel on selected off-peak days. Plan ahead and maximize your rewards.",
            multiplier: 2,
            type: "multiplier"
        },
        {
            title: "Senior Citizen Benefits",
            description: "Extra 15% discount for seniors aged 60+ on all routes. ID verification required at booking.",
            discount: 15,
            type: "senior"
        },
        {
            title: "Group Booking Rewards",
            description: "Book for 10 or more passengers and earn triple points. Perfect for family trips or team travels.",
            multiplier: 3,
            type: "group"
        }
    ];
    return (
        <div className={styles.loyaltyProgramme}>
            <h2 className={styles.offerTitle}>Loyalty Programme</h2>
            <h3 className={styles.featureTitle}>available offers</h3>
            <div className={styles.carouselTrack}>
                {loyaltyOffers.map((offer, index) => (
                    <div key={index} className={styles.offerCard}>
                        <div className={styles.offerHeader}>
                            <h4>{offer.title}</h4>
                            {offer.points && <span className={styles.points}>{offer.points} Points</span>}
                            {offer.discount && <span className={styles.discount}>{offer.discount}% Off</span>}
                            {offer.multiplier && <span className={styles.multiplier}>{offer.multiplier}x Points</span>}
                        </div>
                        
                        <div className={styles.offerType}>
                            <p className={styles.offerDescription}>{offer.description}</p>
                            <span className={`${styles.tag} ${styles[offer.type]}`}>
                                {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.ctaButton}>View All Offers</button>
        </div>
    )
}