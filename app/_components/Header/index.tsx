import Image from "next/image";
import Link from "next/link";
import Styles from "./index.module.css";

export default function Header() {
  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logoLink}>
        <Image
          src="logo.svg"
          alt="SAMPLE"
          className={Styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <nav className={Styles.nav}>
        <ul className={Styles.items}>
          <li>
            <Link href="/news">ニュース</Link>
          </li>
          <li>
            <Link href="/members">メンバー</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
