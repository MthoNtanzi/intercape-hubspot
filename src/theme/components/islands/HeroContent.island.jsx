import styles from "../../styles/hero.module.css";
import slider01 from "../assets/hero/IC_WEBSITE-SLIDERS-01.png";

export default function HeroContentIsland() {
  return (
    <div className={styles.hero}>
      <div className={styles.swiperWrapper}>
        <img src={slider01} alt="Slider 1" width="100%" height="100%" />
      </div>

      <div className={styles.formDiv}>
        {/* Route search form */}
        <form className={styles.travelForm} id="route-search-form">
          <h1>Route Search</h1>

          <div className={styles.travelFormWrapper}>
            {/* Travelling From */}
            <div className={styles.travelSelect}>
              <p>Travelling from?</p>
              <i className={styles.heroIcons}>
                Start Over
                <svg
                  width="28"
                  height="22"
                  viewBox="0 0 28 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.98808 9.34326V11.0083C3.98808 16.5304 8.46842 21 14 21C15.4997 20.9978 16.98 20.661 18.3331 20.0142C19.6861 19.3673 20.8778 18.4268 21.8212 17.261"
                    stroke="#7467ee"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.9809 12.6532V10.9881C23.9809 5.472 19.4994 1.00001 13.969 1.00001C12.465 0.998129 10.98 1.33549 9.62437 1.98697C8.26879 2.63845 7.07759 3.58727 6.13945 4.76283"
                    stroke="#7467ee"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.48508 11L3.94396 8.54108L6.51369 11"
                    stroke="#7467ee"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26.5149 11L24.056 13.4589L21.4875 11"
                    stroke="#7467ee"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </div>

            <select className={styles.travelOptions} required>
              <option value="">Select a city</option>
              <option value="joburg">Johannesburg</option>
              <option value="cape-town">Cape Town</option>
              <option value="durban">Durban</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}
