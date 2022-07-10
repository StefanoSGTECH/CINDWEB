export interface Datas
{
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    username: string
}

export interface DatasADDResp
{
    message: string,
    data: {
        firstName: string,
        lastName: string,
        email: string
    }
}

export interface DatasAllResp
{
    data: {
        id: string,
        email: string,
        firstName: string,
        lastName: string,
        username: string
    }[]
}

export interface Empty
{
    
}
