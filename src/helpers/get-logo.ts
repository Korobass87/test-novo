const logo1: string = require("../img/subtract.svg").default;
const logo2: string = require("../img/subtract2.svg").default;
const logodoc: string = require("../img/doc.svg").default;

export function getLogo(level: number, type:'level'|"row") {
  if  (type === "level")
  { switch (level) {
        case 1:
            return logo1
            break;
        case 2:

            return logo2
            break;
        default: return logodoc
    }
} else return logodoc}
