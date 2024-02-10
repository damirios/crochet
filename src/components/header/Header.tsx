import { WidthContainer } from "@/shared";
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
      <WidthContainer className={s.header_container}>
        <Link className={s.header_logo} href="/">
          Logo
        </Link>
        <HeaderMenu />
      </WidthContainer>
    </header>
  );
};
