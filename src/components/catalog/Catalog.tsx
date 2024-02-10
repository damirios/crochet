import { FC } from "react";

import { ToyMiniCard } from "../toy-mini-card";

import s from "./Catalog.module.scss";

type Props = {};

const mockData = [
  { name: "Irina", id: "1" },
  { name: "Irina", id: "2" },
  { name: "Irina", id: "3" },
];

/**
 * Компонент каталога
 *
 * @returns Функциональный компонент
 */
export const CatalogComponent: FC<Props> = () => {
  return (
    <div className={s.catalog}>
      <div className={s.catalog__grid}>
        {mockData.map((toy) => (
          <ToyMiniCard key={toy.id} />
        ))}
      </div>
    </div>
  );
};
