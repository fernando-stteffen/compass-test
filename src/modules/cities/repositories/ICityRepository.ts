import { City } from "../entities/City";

interface ICityDTO {
  name: string;
  state: string;
}
/*
[X] Cadastrar cidade
[X] Consultar cidade pelo nome
[X] Consultar cidade pelo estado

--------
[X] Consultar pelo ID para o Cliente
*/

interface ICityRepository {
  create({ name, state }: ICityDTO): Promise<void>;
  findByName(name: string): Promise<City>;
  findByNameAndState({ name, state }: ICityDTO): Promise<City>;
  findByState(state: string): Promise<City>;
  findById(id: string): Promise<City>;
}

export { ICityRepository, ICityDTO };
