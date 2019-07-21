const generateRotOptions = () => {
  const fillValue = { heading: "Weak Rot" };
  const initial = new Array(6).fill(fillValue);
  const final = [];
  for (let i = 0; i < 6; ++i) {
    final.push({ options: [...initial] });
  }

  final[0].options[0] = final[0].options[1] = { heading: "Rot Oasis (no rot)" };
  final[5].options[4] = final[5].options[5] = { heading: "Strong Rot" };

  return final;
};

const rotData = generateRotOptions();

export default rotData;
