import styles from "./Hero.module.css";

// displayText is the "type" which is just text like cat, dog, bird, etc.
// there are no images in the mock data, so the image prop is pointless for now; it will be useful if swtiching to API that retrieves images.
export default function Hero({ image, displayText }) {
  return (
    <div
      className={styles.heroContainer}
      style={{
        backgroundImage: `linear-gradient(black, black), url(${image})`,
      }}
    >
      <h2>Find your perfect pet {displayText}</h2>
    </div>
  );
}
