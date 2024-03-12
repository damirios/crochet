import { ToyCard } from "@src/components";
import { mockFetch } from "@src/shared";

type Props = {
  params: { id: string };
};

/**
 * Страница игрушки
 *
 * @returns Функциональный компонент
 */
export default async function ItemPage({ params }: Props) {
  const toyData = await mockFetch(params.id);

  return <ToyCard id={params.id} data={toyData} />;
}
