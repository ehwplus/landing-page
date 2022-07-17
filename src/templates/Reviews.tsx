import { Section } from '../layout/Section';
import { PlayReview } from '../review/PlayReview';

const Reviews = () => (
  <Section
    title="Bewertungen aus den App Stores"
    description="Was sagen Nutzer zur App?"
  >
    <PlayReview
      reviewId="5ee52286-2c4a-4093-8078-dfacf05d1412"
      author="Marco Hilbich"
      imageUrl="https://play-lh.googleusercontent.com/a-/AFdZucqmKm9Rof8XYiwr4J689_kwjRLq_RPURR3c1GnC_Q=s32"
      date="15. Januar 2022"
      reviewText="Eigentlich bleiben bei dieser App kaum Wünsche offen um den privaten Energieverbrauch Transparenz zu verleihen. Intuitive kurze Einarbeitung! Die wichtigsten Features kostenlos und trotzdem quasi keine Werbung. Sehr Übersichtlich offline nutzbar und an nahezu alle Verbrauchssituationen gedacht. Wer den Excel-Export braucht, für den sind einmalige 3,99 € für diese App absolut fair. Ob man für diese Zwecke ein Abo braucht? Sehe ich dann doch eher nicht. Aber alles in allem sehr gelungen. Danke!"
    />
    <PlayReview
      reviewId="b3547e4a-713a-48a2-9ce2-e456dd5cf4fc"
      author="Bernd Bratsch"
      imageUrl="https://play-lh.googleusercontent.com/a/AItbvmmPvYKRt9EBP99L1UcOMDaGhAsib0-QCdqx6k5g=s32-mo"
      date="17. Dezember 2021"
      reviewText="Für mich perfekt. Sehr schnelle und intuitive Bedienung. Statistikkurve sehr übersichtlich. Hatte schon andere Apps für diesen Zweck. Alle deinstalliert da zu überladen und unübersichtlich. Zudem besteht die Möglichkeit der Mitgestaltung über ein Voting. Absolut empfehlenswert"
    />
    <PlayReview
      reviewId="9f38fe15-ebe2-412e-a268-7bbf04317b98"
      author="Carbon Racer"
      imageUrl="https://play-lh.googleusercontent.com/a-/AFdZucrvCpn87GTcgfb7i8cV_kXCdsyK3CbzS4nPsyedKg=s32"
      date="31. Mai 2021"
      reviewText="Tolle App für den Privatbereich, um Verbrauchsdaten im Überblick zu halten. Für mich sehr nützlich ist die Funktion, die Daten und Statistiken als Excel zu exportieren, um sie zb an Vermieter weiterzureichen. Ich kopiere die Daten in mein eigenes Excel template. Das ermöglicht mir geniale Auswertungsmöglichkeiten. Die App selbst ist übersichtlich gestaltet und hat einen professionellen Look. Positiv auch der nette Kontakt zum Entwickler. Berücksichtigt Wünsche und Anregungen der Nutzer! 👍"
    />
    <PlayReview
      reviewId="6932fdcc-23d5-47e3-8f2d-737bcaf6dda9"
      author="Takera"
      imageUrl="https://play-lh.googleusercontent.com/a-/AFdZucq6iwSkKTBDjC0lJQBYOJo-0PPtsTaoliV9hZ_rxA=s32"
      date="1. März 2021"
      reviewText="Es macht Spaß diese App zu nutzen. Sie ist einfach zu verstehen und sehr schön übersichtlich. Für mich genau das Richtige. Ich nutze sie für Strom, Warmwasser und Heizung. Schon beim eingeben kann ich erkennen, ob ich mehr oder weniger verbraucht habe. Sehr hilfreich, da ich für letztes Jahr sehr viel nachzahlen musste. Der Kontakt zum Entwickler ist sehr angenehm. Probleme werden quasi sofort gelöst. Und das völlig entspannt und es wird alles sehr gut erklärt."
    />
  </Section>
);

export { Reviews };
