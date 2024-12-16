export const metadata = {
  title: "About page",
};

export default async function AboutPage({ searchParams }) {
  const params = await searchParams;

  console.log(params);

  return "about page";
}
