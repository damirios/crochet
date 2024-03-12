/**
 * Функция возвращает замоканные данные об игрушке
 *
 * @param id
 * @returns Данные об игрушке
 */
export const mockFetch = async (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("описание товара номер: " + id);
    }, 700);
  });
};
