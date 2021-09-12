import { db } from "./firebase";

const monsters = db.collection("monsters");

class Monsters {
  getAll() {
    return monsters;
  }
}

export default new Monsters();
