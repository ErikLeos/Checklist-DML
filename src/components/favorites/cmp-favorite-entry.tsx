import Image from "next/image";
import styles from "./cmp-favorite-entry.module.css";

export function CmpFavoriteEntry() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.optionsBar}>
        <Image src="/star.svg" alt="Favorites" width={16} height={16} />
        <Image src="/3dots_h.svg" alt="More Options" width={16} height={16} />
      </div>
      <div className={styles.title}>
        Lista para equipo de materiales
      </div>
    </div>
  );
}