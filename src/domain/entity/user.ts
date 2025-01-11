export type IUserProps = {
    nome: string;
    email: string;
    senha: string;
    rendamensal: number;
    poupancamensal: number
};

export default class UserEntity {
    public props: IUserProps;

    constructor (props: IUserProps){
        this.props = {
            ...props
        }
    }
}