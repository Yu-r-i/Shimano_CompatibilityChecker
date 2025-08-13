/**
 * src/utils/compat.js
 */

/**
 * シフター ↔ RD
 * 条件: speed 一致 && actuation 一致
 */
export function checkShifterRearDerailleur(shifter, rd) {
  const speedOK = shifter?.speed === rd?.speed;
  const actOK = shifter?.actuation && rd?.actuation && shifter.actuation === rd.actuation;

  const ok = Boolean(speedOK && actOK);
  const reasons = [];
  if (!speedOK) reasons.push(`speed不一致: Shifter ${shifter?.speed ?? "-"} vs RD ${rd?.speed ?? "-"}`);
  if (!actOK) reasons.push(`actuation不一致: ${shifter?.actuation ?? "-"} vs ${rd?.actuation ?? "-"}`);

  return { ok, reasons };
}

/**
 * RD ↔ カセット
 * 条件: speed 一致 && (カセット最大歯数 <= RDのmax_sprocket)
 */
export function checkRDvsCassette(rd, cassette) {
  const speedOK = rd?.speed === cassette?.speed;
  const csMax = Array.isArray(cassette?.range) ? cassette.range[1] : undefined;
  const rdMax = rd?.max_sprocket;
  const sprocketOK = typeof csMax === "number" ? (typeof rdMax === "number" ? csMax <= rdMax : true) : true;

  const ok = Boolean(speedOK && sprocketOK);
  const reasons = [];
  if (!speedOK) reasons.push(`speed不一致: RD ${rd?.speed ?? "-"} vs CS ${cassette?.speed ?? "-"}`);
  if (!sprocketOK) reasons.push(`最大スプロケット超過: RD max ${rdMax} < CS max ${csMax}`);

  return { ok, reasons };
}

/**
 * チェーン ↔ カセット
 * 条件: speed 一致
 * （将来: chain_type(HG/UG/Hyperglide+/等) も判定へ）
 */
export function checkChainVsCassette(chain, cassette) {
  const speedOK = chain?.speed === cassette?.speed;
  const ok = Boolean(speedOK);
  const reasons = [];
  if (!speedOK) reasons.push(`speed不一致: CN ${chain?.speed ?? "-"} vs CS ${cassette?.speed ?? "-"}`);
  return { ok, reasons };
}

/**
 * 追加予定: ブレーキ系（レバー ↔ キャリパー）
 * 条件例: brake_type 一致 && brake_pull 整合
 */
export function checkBrakeLeverCaliper(lever, caliper) {
  if (!lever || !caliper) return { ok: true, reasons: [] }; // 未選択なら判定対象外
  const typeOK = lever?.brake_type && caliper?.brake_type && lever.brake_type === caliper.brake_type;
  const pullOK = lever?.brake_pull && caliper?.required_pull
    ? lever.brake_pull === caliper.required_pull
    : true;

  const ok = Boolean(typeOK && pullOK);
  const reasons = [];
  if (!typeOK) reasons.push(`ブレーキ種別不一致: ${lever?.brake_type ?? "-"} vs ${caliper?.brake_type ?? "-"}`);
  if (!pullOK) reasons.push(`レバー引き量不一致: ${lever?.brake_pull ?? "-"} vs ${caliper?.required_pull ?? "-"}`);

  return { ok, reasons };
}

/**
 * 複数ルールの集約
 */
export function summarize(results) {
  const ok = results.every(r => r?.ok);
  const reasons = results.flatMap(r => r?.reasons ?? []);
  return { ok, reasons };
}
