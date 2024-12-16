export default async function ItemPage({ params }) {
  const { itemId } = await params;
  return `item page - ${itemId}`;
}
