export type Brand = {
    codigo: string;
    nome: string;
};

export type BrandsResponse = Brand[]; // GET /marcas

export type Model = {
    codigo: number;
    nome: string;
};

export type Year = {
    codigo: string;
    nome: string;
};

export type ModelsResponse = {
    modelos: Model[];
    anos: Year[];
};