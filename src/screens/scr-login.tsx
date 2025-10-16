"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from "./scr-login.module.css";

export function ScrLogIn() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: add real auth here
    router.push('/main');
  }

  return(
    <div className={styles.loginContainer}>
      {/* <Image
        src="/Cat.png"
        alt="Login Cat"
        className={styles.loginCat}
        width={100}
        height={100}
      /> */}
      <h1 className={styles.welcomeTitle}>Bienvenido</h1>
      <h2 className={styles.welcomeSubtitle}>Inicia sesion para empezar con tus deberes</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <p>Correo Electronico</p>
        <div className={styles.inputContainer}>
          <Image src="/file.svg" width={24} height={24} alt="File Icon" />
          <input type="text" placeholder='example@mail.com' />
        </div>
        <p>Contraseña</p>
        <div className={styles.inputContainer}>
          <Image src="/file.svg" width={24} height={24} alt="File Icon" />
          <input type="password" placeholder='...'/>
        </div>
        <a href="#" className={styles.forgotPassword}>Contraseña olvidada</a>
        <button type="submit" className={styles.loginButton}>Iniciar Sesion</button>

        <p className={styles.noAccount}>Todavia no tienes una cuenta</p>
        <a href="#" className={styles.createAccount}>Click aqui</a>
      </form>
    </div>
  );
}
