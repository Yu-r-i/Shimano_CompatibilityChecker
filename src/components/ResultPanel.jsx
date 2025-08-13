/**
 * src/components/ResultPanel.jsx
 */

import styles from "../styles/ResultPanel.module.css";

/**
 * 互換判定結果パネル
 * @param {Object|null} summary - { ok: boolean, reasons: string[] }
 */
export default function ResultPanel({ summary }) {
  if (!summary) {
    return <p className={styles.placeholder}>パーツを選択すると結果が表示されます。</p>;
  }

  return (
    <div
      className={`${styles.panel} ${
        summary.ok ? styles.ok : styles.ng
      }`}
    >
      <h3 className={styles.title}>
        結果: {summary.ok ? "互換OK ✅" : "互換NG ❌"}
      </h3>
      {!summary.ok && summary.reasons.length > 0 && (
        <ul className={styles.reasons}>
          {summary.reasons.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
