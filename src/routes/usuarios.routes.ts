import { Router } from 'express';
import { uuid } from 'uuidv4';

const usersRouter = Router();

interface User {
    id: string;
    name: string;
    health: number;
    mana: number;
    inventory: string;
}

const users: User[] = [];

usersRouter.post('/', (request, response) => {
    const { name, inventory } = request.body;

    const findUserInSameName = users.find(user => name === user.name);

    if (findUserInSameName) {
        return response
            .status(400)
            .json({ message: 'This name is already used' });
    }

    const user = {
        id: uuid(),
        name,
        health: 100,
        mana: 100,
        inventory,
    };

    users.push(user);

    return response.json({ message: 'Users created' });
});

// usersRouter.get();

export default usersRouter;
