/**
 * Validate hex code is color
 * 
 * @param color : hex code
 * @returns boolean
 */
export const validateHex = (color: string): boolean => {
  if (typeof color !== "string") throw new Error("Input is not a color");

  if (color.length !== 7) throw new Error("Input is not a color");

  if (color[0] !== "#") throw new Error("Input is not a color");

  const init_hex: string = "0123456789ABCDEF";
  for (let index = 1; index < 7; index++) {
    if (!init_hex.includes(color[index].toUpperCase()))
      throw new Error("Input is not a color");
  }

  return true;
};
