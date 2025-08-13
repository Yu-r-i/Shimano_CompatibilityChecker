/**
 * src/components/PartSelector.jsx
 */

import { useMemo } from "react";
import styles from "../styles/PartSelector.module.css";

/**
 * 汎用セレクタ
 * @param {Object[]} parts - 全パーツ
 * @param {string} category - 例: "shifter" | "rear_derailleur" | "cassette" | "chain"
 * @param {Object|null} value - 現在の選択パーツ
 * @param {(p:Object|null)=>void} onChange - 変更ハンドラ
 * @param {string} [label] - ラベル表示
 * @param {boolean} [compact=false] - コンパクト表示
 */
export default function PartSelector({
  parts,
  category,
  value,
  onChange,
  label,
  compact = false,
}) {
  const list = useMemo(
    () => parts.filter((p) => p.category === category),
    [parts, category]
  );

  return (
    <label className={`${styles.wrapper} ${compact ? styles.compact : ""}`}>
      <span className={styles.label}>
        {label ?? `Select ${category}`}
      </span>
      <select
        className={styles.select}
        value={value?.id || ""}
        onChange={(e) =>
          onChange(list.find((p) => p.id === e.target.value) || null)
        }
      >
        <option value="">-- choose --</option>
        {list.map((p) => (
          <option key={p.id} value={p.id}>
            {p.id} · {p.series}{p.speed ? ` · ${p.speed}s` : ""}
          </option>
        ))}
      </select>

      {value && (
        <div className={styles.meta}>
          <span className={styles.badge}>{value.category}</span>
          {value.speed && <span className={styles.badge}>{value.speed}s</span>}
          {value.brake_type && (
            <span className={styles.badge}>{value.brake_type}</span>
          )}
        </div>
      )}
    </label>
  );
}
