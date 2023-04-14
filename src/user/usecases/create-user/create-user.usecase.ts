export interface CreateUserUsecase<CreateUserPort, CreateUserInput> {
    execute(port?: CreateUserPort): Promise<CreateUserInput>;
}