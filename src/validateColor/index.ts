export const validateColorRGB = (color: string): boolean => {
  if (typeof color !== "string") throw new Error("Input is not a RGB color");

  if (color.length !== 7) throw new Error("Input is not a RGB color");

  if (color[0] !== "#") throw new Error("Input is not a RGB color");

  const init_hex: string = "0123456789ABCDEF";
  for (let index = 1; index < 7; index++) {
    if (!init_hex.includes(color[index].toUpperCase()))
      throw new Error("Input is not a RGB color");
  }

  return true;
};
