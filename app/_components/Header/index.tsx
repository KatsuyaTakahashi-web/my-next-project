import Image from "next/image";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <a href="/" className={Styles.logoLink}>
        <Image
          src="logo.svg"
          alt="SAMPLE"
          className={Styles.logo}
          width={348}
          height={133}
          priority
        />
      </a>
    </header>
  );
}
