export function ImpactStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="impact-stat">
      <p className="impact-value">{value}</p>
      <p className="impact-label">{label}</p>
    </div>
  );
}
