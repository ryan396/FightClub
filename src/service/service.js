// import { db } from "./firebase";
import { monsters } from "./test-data";
// const monsters = db.collection("monsters");

class Monsters {
  getAll() {
    return monsters;
  }
}

export default new Monsters();
