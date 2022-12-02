import styles from "./emojiPiker.module.scss";

export default function EmojiList({ children }) {
    return <div className={styles.emojisList}>{children}</div>;
  }