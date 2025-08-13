/**
 * src/services/data.js
 *
 * This module provides functions to load and manage bicycle parts data.
 */

import shifters from "../data/shifters.json";
import rds from "../data/rear_derailleurs.json";
import cassettes from "../data/cassettes.json";
import chains from "../data/chains.json";

/**
 * 全パーツを結合して返す
 */
export async function loadParts() {
  try {
    const all = [
      ...shifters.parts,
      ...rds.parts,
      ...cassettes.parts,
      ...chains.parts,
    ];
    return all;
  } catch (err) {
    console.error("Error loading parts (combined):", err);
    return [];
  }
}

/**
 * カテゴリ別に取得するユーティリティ
 * @param {"shifter"|"rear_derailleur"|"cassette"|"chain"} category
 */
export async function loadPartsByCategory(category) {
  try {
    switch (category) {
      case "shifter":
        return shifters.parts;
      case "rear_derailleur":
        return rds.parts;
      case "cassette":
        return cassettes.parts;
      case "chain":
        return chains.parts;
      default:
        return [];
    }
  } catch (err) {
    console.error(`Error loading parts for category=${category}:`, err);
    return [];
  }
}
