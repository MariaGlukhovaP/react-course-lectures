import { AppClientOnly } from "./app-client-only";

export function generateStaticParams() {
  return [{ slug: [""] }];
}

export default function Page() {
  return <AppClientOnly />;
}
