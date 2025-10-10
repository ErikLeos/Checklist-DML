import Image from "next/image";
import styles from "./cmp-recent-entry.module.css";

export function CmpRecentEntry() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        Lista 20/5/2025
      </div>
      <div className={styles.subtitle}>
        hace 3 mins
      </div>
      <div className={styles.options}>
        <Image src="/3dots_v.svg" alt="More Options" width={12} height={12} />
      </div>
    </div>
  );
}