// import Image from 'next/image';
import { CmpFavoriteEntry } from "@/components/favorites/cmp-favorite-entry";
import styles from "./subscr-main-menu.module.css";
import Image from "next/image";
import { CmpRecentEntry } from "@/components/main-menu-entries/cmp-recent-entry";

export function SubScrMainMenu() {
  return(
    <div className={styles.mainLayout}>
      <div className={styles.favorites}>
        <div className={styles.title}>
          <Image src="/star.svg" alt="Favorites Icon" width={30} height={30} />
          <p>Favoritos</p>
        </div>
        <div className={styles.favoritesMainContainer}>
          {/* Test containers, retrieve them and show them instead of hardcoding them */}
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
          <CmpFavoriteEntry/>
        </div>
      </div>

      <div className={styles.recent}>
        <div className={styles.title}>
          <Image src="/clock.svg" alt="Recent" width={24} height={24} className={styles.recentIcon}/>
          <p>Recientes</p>
        </div>
        <div className={styles.recentMainContainer}>
          {/* Test containers, retrieve them and show them instead of hardcoding them */}
          <CmpRecentEntry/>
          <CmpRecentEntry/>
          <CmpRecentEntry/>
          <CmpRecentEntry/>
          <CmpRecentEntry/>
          <CmpRecentEntry/>
          <CmpRecentEntry/>
        </div>
      </div>
      
    </div>
  );
}
