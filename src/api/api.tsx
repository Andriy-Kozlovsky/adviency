// @ts-ignore
export const api = () => {
  // @ts-ignore
  const gifts = [
    {text: "Medias", name: "María", image: "", amount: 3, id: 1234},
    {text: "Vitel Tone", name: "Dimitry", image: "", amount: 1, id: 3456},
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(gifts);
    }, 1000);
  });
};
