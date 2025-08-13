/**
 * src/pages/CompatibilityPage.jsx
 */

import { useEffect, useState } from "react";
import PartSelector from "../components/PartSelector";
import ResultPanel from "../components/ResultPanel";
import {
  checkShifterRearDerailleur,
  checkRDvsCassette,
  checkChainVsCassette,
  summarize,
} from "../utils/compat";
import { loadParts } from "../services/data";
import styles from "../styles/CompatibilityPage.module.css";

export default function CompatibilityPage() {
  const [parts, setParts] = useState([]);
  const [shifter, setShifter] = useState(null);
  const [rd, setRd] = useState(null);
  const [cassette, setCassette] = useState(null);
  const [chain, setChain] = useState(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    loadParts().then(setParts);
  }, []);

  useEffect(() => {
    if (!shifter || !rd || !cassette || !chain) {
      setSummary(null);
      return;
    }
    const r1 = checkShifterRearDerailleur(shifter, rd);
    const r2 = checkRDvsCassette(rd, cassette);
    const r3 = checkChainVsCassette(chain, cassette);
    setSummary(summarize([r1, r2, r3]));
  }, [shifter, rd, cassette, chain]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Compatibility Checker</h2>
      <div className={styles.selectorGrid}>
        <PartSelector
          parts={parts}
          category="shifter"
          value={shifter}
          onChange={setShifter}
          label="Shifter"
        />
        <PartSelector
          parts={parts}
          category="rear_derailleur"
          value={rd}
          onChange={setRd}
          label="Rear Derailleur"
        />
        <PartSelector
          parts={parts}
          category="cassette"
          value={cassette}
          onChange={setCassette}
          label="Cassette"
        />
        <PartSelector
          parts={parts}
          category="chain"
          value={chain}
          onChange={setChain}
          label="Chain"
        />
      </div>
      <ResultPanel summary={summary} />
    </div>
  );
}
