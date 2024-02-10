import { FC } from "react";
import clsx from "clsx";

import s from "./WidthContainer.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
  width?: number;
};

/**
 * Компонент, ограничивающий ширину
 *
 * @returns Функциональный компонент, переданный в качестве пропса, ограниченный по ширине
 */
export const WidthContainer: FC<Props> = ({
  children,
  className,
  width = 1400,
}) => {
  const containerClasses = clsx(s.container, className);

  return (
    <div style={{ width }} className={containerClasses}>
      {children}
    </div>
  );
};
