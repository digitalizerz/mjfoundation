export function PartnerLockup({
  label,
  name,
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="partner-lockup">
      <p className="eyebrow">{label}</p>
      <p className="partner-name">{name}</p>
    </div>
  );
}
