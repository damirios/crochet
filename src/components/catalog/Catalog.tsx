import { FC } from "react";

import { IMiniCard } from "@src/shared";

import { ToyMiniCard } from "../toy-mini-card";

import s from "./Catalog.module.scss";

type Props = {};

const mockData: IMiniCard[] = [
  {
    title: "Irina",
    id: "1",
    description: "Привет! ВАВАК",
    imageSrc: "/images/Эрэна.jpg",
  },
  {
    title: "Irina 2",
    id: "2",
    description: "Привет! ВАВАК 2",
    imageSrc: "/images/Эрэна.jpg",
  },
  {
    title: "Irina 3",
    id: "3",
    description: "Привет! ВАВАК 3",
    imageSrc: "/images/Эрэна.jpg",
  },
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
          <ToyMiniCard key={toy.id} toyData={toy} />
        ))}
      </div>
    </div>
  );
};
