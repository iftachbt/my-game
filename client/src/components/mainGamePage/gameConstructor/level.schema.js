export function levelSchema(level) {
  const modifyLevel = (level) => {
    let calcultor = level.toString().slice(-1);
    if (calcultor === "0") return "10";
    return calcultor;
  };
  switch (modifyLevel(level)) {
    case "1":
      return ["regular", "regular"];
      break;
    case "2":
      return ["regular", "regular", "regular"];
      break;
    case "3":
      return ["boss"];
      break;
    case "4":
      return ["regular", "regular", "regular"];
      break;
    case "5":
      return ["regular", "boss"];
      break;
    case "6":
      return ["regular", "regular", "regular", "regular"];
      break;
    case "7":
      return ["regular", "regular", "regular", "regular"];
      break;
    case "8":
      return ["boss", "regular", "regular"];
      break;
    case "9":
      return ["boss", "regular", "regular", "regular"];
      break;
    case "10":
      return ["boss", "boss", "regular", "regular"];
      break;
  }
}
