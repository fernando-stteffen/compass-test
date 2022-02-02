import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("clients")
class Client {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  sex: string;

  @Column()
  birthdate: Date;

  @Column()
  age: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  created_at: Date;

  constructor() {
    if (!this.id) {
      if (!this.id) this.id = uuidV4();
    }
  }
}

export { Client };
