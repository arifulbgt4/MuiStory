import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();
  return (
    <main>
      <h1>{t("Index.title")}</h1>
    </main>
  );
}
