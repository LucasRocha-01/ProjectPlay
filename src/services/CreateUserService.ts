import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface RequestDTO {
    name: string;
    inventory: string;
}

class CreateUserService {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    public execute({ name, inventory }: RequestDTO): User {
        const findUserInSameName = this.usersRepository.findByName(name);

        if (findUserInSameName) {
            throw Error('This name is already used');
        }
        const user = this.usersRepository.create({
            name,
            inventory,
        });
        return user;
    }
}

export default CreateUserService;
