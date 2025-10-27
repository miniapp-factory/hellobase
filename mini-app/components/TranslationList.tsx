import { translations } from "./translations";

export default function TranslationList() {
  return (
    <section className="w-full max-w-2xl mx-auto mt-8 space-y-4">
      {translations.map(({ lang, text }) => (
        <article key={lang} className="p-4 border rounded-md bg-muted/10">
          <h3 className="font-semibold">{lang}</h3>
          <p className="text-lg">{text}</p>
        </article>
      ))}
    </section>
  );
}
