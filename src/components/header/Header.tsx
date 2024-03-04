import { LinksEnum, WidthContainer } from "@src/shared";
import Link from "next/link";
import { FC } from "react";
import { HeaderMenu } from "../header-menu";

import s from "./Header.module.scss";

type Props = {};

/**
 * Компонент хэдера
 *
 * @returns Функциональный компонент
 */
export const Header: FC<Props> = () => {
  return (
    <header className={s.header}>
      <WidthContainer className={s.header__container}>
        <Link className={s.header__logo} href={LinksEnum.HOME}>
          Logo
        </Link>
        <HeaderMenu />
        <Link href={LinksEnum.CART}>Корзина</Link>
      </WidthContainer>
    </header>
  );
};
