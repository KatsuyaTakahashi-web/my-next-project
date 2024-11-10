import styles from "./page.module.css";

export default function Home() {
  // Javascriptの定数や式などを書くことができる
  const name = "世界";

  // HTMLのようなマークアップを書くことができる
  // Javascriptを書いたり、参照する場合は{}で囲む
  return (
    <div>
      <h1 className={styles.title}>テクノロジーの力で{name}を変える</h1>
      <p className={styles.description}>
        私たちは市場をリードしているグローバルテックカンパニーです。
      </p>
    </div>
  );
}
