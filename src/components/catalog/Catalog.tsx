import { FC } from "react";

import s from "./Catalog.module.scss";

type Props = {};

/**
 * Компонент каталога
 *
 * @returns Функциональный компонент
 */
export const CatalogComponent: FC<Props> = () => {
  return <div className={s.catalog}>Привет, Гусына</div>;
};
