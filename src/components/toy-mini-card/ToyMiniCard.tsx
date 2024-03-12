import { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { IMiniCard } from "@src/shared";

import s from "./ToyMiniCard.module.scss";

type Props = {
  /** Данные об игрушке */
  toyData: IMiniCard;
};

/**
 * Компонент маленькой карточки игрушки
 *
 * @returns Функциональный компонент
 */
export const ToyMiniCard: FC<Props> = ({ toyData }) => {
  const { description, id, imageSrc, title } = toyData;

  const link = `/catalog/${id}`;

  return (
    <div className={s.card}>
      <Link href={link}>
        <div className={s.card__image}>
          <Image
            src={imageSrc}
            alt={`игрушка_${title}`}
            width={200}
            height={350}
          />
        </div>
        <div className={s.card__info}>
          <div className={s.card__title}>{title}</div>
          <div className={s.card__description}>{description}</div>
        </div>
      </Link>
    </div>
  );
};
