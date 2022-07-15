import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Was bringt die App?"
    description="Noch nie waren die Strom- und Gaskosten höher. Wer seinen Verbrauch kennt, weiß, welche Kosten auf ihn zukommen und kann auch einschätzen, ob Sparmaßnahmen etwas bringen. Die Nebenkostenabrechnung ist dann keine Überraschung mehr."
  >
    <VerticalFeatureRow
      title="Alle Zähler in einer App"
      description="Strom (auch HT-/NT), Gas, Kalt- und Warmwasser und Wasserabzugszähler, Öltanks, Heizkörper mit Verdunster, Photovoltaik-Anlagen. In dieser Zählerstands-App haben sie alle ihren Platz."
      image="/assets/images/feature.svg"
      imageAlt="Alle Zähler in einer App"
      reverse
    />
    <VerticalFeatureRow
      title="Kostenüberblick"
      description="Die Gas- und Strompreise steigen. Pro Person pro Monat im Haushalt können künftig 100 Euro Mehrkosten auf Sie zukommen. Gut, wenn Sie frühzeitig wissen, was es künftig kostet. Sie können Ihren täglichen, wöchentlichen, monatlichen und jährlichen Verbrauch und Kostenabschätzungen einsehen."
      image="/assets/images/feature2.svg"
      imageAlt="Kostenüberblick"
    />
    <VerticalFeatureRow
      title="Ihre Zählerstände auf allen Geräten"
      description="Sie haben mehrere Geräte, z.B. ein Android-Smartphone und einen iPad und einen PC? Kein Problem, wenn Sie es möchten, werden Ihre Daten über Google Drive synchronisiert. Sogar das Teilen mit Mitbewohnern ist möglich."
      image="/assets/images/feature3.svg"
      imageAlt="Ihre Zählerstände auf allen Geräten"
      reverse
    />
    <VerticalFeatureRow
      title="Feature-Abstimmung"
      description="Bei EHW+ entscheiden die Nutzer, wie es weitergeht. Nutzervorschläge kommen in die Feature-Umfrage. Jeder Nutzer hat drei Stimmen und kann sich jederzeit umentscheiden."
      image="/assets/images/feature4.svg"
      imageAlt="Feature-Abstimmung"
    />
  </Section>
);

export { VerticalFeatures };
