import styles from '../../../styles/whoAreWe.module.css';

export default function WhoAreWe() {
    return (
        <div className={styles.whoAreWeContainer}>
            <h2 className={styles.offerTitle}>Who Are We?</h2>
            <h3 className={styles.featureTitle}>since 1979</h3>
            <div className={styles.videoContainer}>
                <iframe
                    src="https://www.youtube.com/embed/U44s4uypv1o"
                    title="Intercape Corporate video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
        </div>
    );
}
