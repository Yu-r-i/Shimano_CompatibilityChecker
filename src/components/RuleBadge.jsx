/**
 * src/components/RuleBadge.jsx
 */

import styles from "../styles/RuleBadge.module.css";

/**
 * 判定ルールのOK/NGバッジ表示
 * @param {boolean} ok - ルールが満たされている場合true
 * @param {string} [label] - 表示テキスト（省略時はOK/NG）
 */
export default function RuleBadge({ ok, label }) {
  return (
    <span
      className={`${styles.badge} ${ok ? styles.ok : styles.ng}`}
      title={ok ? "互換あり" : "互換なし"}
    >
      {label ?? (ok ? "OK" : "NG")}
    </span>
  );
}
