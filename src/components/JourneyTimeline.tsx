import { journey } from "@/content/journey";

export function JourneyTimeline() {
  return (
    <ol className="journey">
      {journey.map((item) => (
        <li key={item.id}>
          <p className="journey-kicker">{item.kicker}</p>
          <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
