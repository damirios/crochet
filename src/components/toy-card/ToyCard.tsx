import { FC } from "react";

import s from "./ToyCard.module.scss";

type Props = {
  /** Данные об игрушке */
  data: string;
  /** id игрушки */
  id: string;
};

/**
 * Компонент маленькой карточки игрушки
 *
 * @returns Функциональный компонент
 */
export const ToyCard: FC<Props> = ({ data, id }) => {
  return (
    <div className={s.card}>
      ВАВУК: {id} {data}
    </div>
  );
};
