import { Column, Entity } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("cities")
class City {
  @Column()
  id?: string;

  @Column()
  name: string;

  @Column()
  state: string;

  @Column()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { City };
