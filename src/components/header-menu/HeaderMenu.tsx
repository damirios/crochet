import Link from "next/link";
import { FC } from "react";

import s from "./HeaderMenu.module.scss";

type Props = {};

/**
 * Компонент меню в хэдере
 *
 * @returns Функциональный компонент
 */
export const HeaderMenu: FC<Props> = () => {
  return (
    <ul className={s.header_menu}>
      <Link href="/catalog">Каталог</Link>
    </ul>
  );
};
