import { journey } from "@/content/journey";

export function JourneyTimeline() {
  return (
    <ol className="journey">
      {journey.map((item) => (
        <li key={item.id}>
          <details>
            <summary>
              <span className="journey-kicker">{item.kicker}</span>
              <span className="journey-title">{item.title}</span>
            </summary>
            <p>{item.body}</p>
          </details>
        </li>
      ))}
    </ol>
  );
}
