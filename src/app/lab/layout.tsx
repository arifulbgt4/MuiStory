import Laboratory from "src/widgets/Laboratory";

export const metadata = {
  title: "Laboratory",
  description: "Experiment components",
  viewport: "initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Laboratory>{children}</Laboratory>
    </main>
  );
}
