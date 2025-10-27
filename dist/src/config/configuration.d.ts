declare const _default: () => {
    port: number;
    databse: {
        host: string | undefined;
        port: number;
        username: string | undefined;
        password: string | undefined;
        database: string | undefined;
    };
    jwt: {
        secret: string | undefined;
        expiresIn: string;
    };
};
export default _default;
