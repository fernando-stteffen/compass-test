import { City } from "../entities/City";

interface ICityDTO {
  name: string;
  state: string;
}

interface ICityRepository {
  create({ name, state }: ICityDTO): Promise<void>;
  findByName(name: string): Promise<City>;
  findById(id: string): Promise<City>;
}

export { ICityRepository };
