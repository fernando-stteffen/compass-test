import { getRepository, Repository } from "typeorm";

import { City } from "@modules/cities/entities/City";

import { ICityRepository, ICityDTO } from "../ICityRepository";

class CityRepository implements ICityRepository {
  private repository: Repository<City>;

  constructor() {
    this.repository = getRepository(City);
  }

  async create({ name, state }: ICityDTO): Promise<void> {
    const city = this.repository.create({
      name,
      state,
    });

    await this.repository.save(city);
  }

  async findByName(name: string): Promise<City> {
    const city = await this.repository.findOne({ name });
    return city;
  }

  async findByNameAndState(name: string, state: string): Promise<City> {
    const city = await this.repository.findOne({ name, state });
    return city;
  }
  async findById(id: string): Promise<City> {
    const city = await this.repository.findOne({ id });
    return city;
  }

  async findByState(state: string): Promise<City> {
    const city = await this.repository.findOne({ state });
    return city;
  }
}

export { CityRepository };
