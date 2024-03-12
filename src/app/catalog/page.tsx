import { ReactElement } from "react";

import { CatalogComponent } from "@src/components";

type Props = {};

/**
 * Страница каталога игрушек
 *
 * @returns Функциональный компонент
 */
export default function CatalogPage(): ReactElement<Props> {
  return <CatalogComponent />;
}
