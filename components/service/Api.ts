export interface Container {
    id: number;
    name: string;
    description: string;
    unitOfMeasure: string;
    maxCapacity: number;
    image: string;
}

export interface SchedulerItem {
    id?: string;
    userId: string;
    name: string;
    time: string;
    location: string;
    description: string;
    date: string;
    completed?: boolean;
}

export interface GroupScheduler {
    [date: string]: SchedulerItem[];
}

export interface GroupSchedulerResponse {
    groupScheduler: GroupScheduler;
}

// URL da API
const API_URL = 'https://tg-ecoil-f9056169a8aa.herokuapp.com';

const HEADERS_DEFAULT = {
    'Content-Type': 'application/json',
};

// Função para obter todos os containers
export const getAllContainers = async (): Promise<Container[]> => {
    try {
        const response = await fetch(`${API_URL}/containers`, {
            method: 'GET',
            headers: HEADERS_DEFAULT,
        });

        if (!response.ok) {
            throw new Error(`Erro ao obter os containers: ${response.statusText}`);
        }

        const data: Container[] = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter os containers:', error);
        throw new Error('Não foi possível obter os containers. Por favor, tente novamente mais tarde.');
    }
};

// Função para obter um container
export const getContainer = async (id: number): Promise<Container> => {
    try {
        const response = await fetch(`${API_URL}/containers/${id}`, {
            method: 'GET',
            headers: HEADERS_DEFAULT,
        });

        if (!response.ok) {
            throw new Error(`Erro ao obter o container: ${response.statusText}`);
        }

        const data: Container = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao obter o container:', error);
        throw new Error('Não foi possível obter o container. Por favor, tente novamente mais tarde.');
    }
};

// Função para obter dados agendados agrupados
export const getGroupedScheduler = async (userId: string, completed?: boolean): Promise<GroupSchedulerResponse> => {

    const requestOptions = {
        method: "GET",
        headers: HEADERS_DEFAULT,
    };

    try {        
        let optionalParamString = completed !== undefined ? `&completed=${completed}` : '';
        const uri = `${API_URL}/scheduler/grouped?userId=${userId}${optionalParamString}`
        const response = await fetch(uri, requestOptions);
        
        if (!response.ok) {
            throw new Error(`Erro ao obter os dados agendados: ${response.statusText}`);
        }

        const result: GroupSchedulerResponse = await response.json();
        return result;
    } catch (error) {
        console.error('Erro ao obter os dados agendados:', error);
        throw new Error('Não foi possível obter os dados agendados. Por favor, tente novamente mais tarde.');
    }
};


// Função para adicionar um item agendado
export const addSchedulerItem = async (item: Omit<SchedulerItem, 'id' | 'completed'>): Promise<SchedulerItem> => {

    const raw = JSON.stringify(item);

    const request = {
        method: "POST",
        headers: HEADERS_DEFAULT,
        body: raw,
    };

    try {

        const response = await fetch(`${API_URL}/scheduler`, request);

        if (!response.ok) {
            throw new Error(`Erro ao adicionar o item agendado: ${response.statusText}`);
        }

        const result: SchedulerItem = await response.json();
        return result;
    } catch (error) {
        console.error('Erro ao adicionar o item agendado:', error);
        throw new Error('Não foi possível adicionar o item agendado. Por favor, tente novamente mais tarde.');
    }
};

// Função para completar um item agendado
export const completeSchedulerItem = async (id: string): Promise<void> => {
    const requestOptions = {
        method: "PUT",
        headers: HEADERS_DEFAULT,
    };

    try {
        const response = await fetch(`${API_URL}/scheduler/complete/${id}`, requestOptions);

        if (!response.ok) {
            throw new Error(`Erro ao completar o item agendado: ${response.statusText}`);
        }

        console.log('Item agendado completado com sucesso.');
    } catch (error) {
        console.error('Erro ao completar o item agendado:', error);
        throw new Error('Não foi possível completar o item agendado. Por favor, tente novamente mais tarde.');
    }
};

// Função para obter pontos de coleta
export const getCollectionPoints = async (): Promise<any> => {

    const requestOptions = {
        method: "GET",
        headers: HEADERS_DEFAULT,
    };

    try {
        const response = await fetch(`${API_URL}/collection/points`, requestOptions);

        if (!response.ok) {
            throw new Error(`Erro ao obter os pontos de coleta: ${response.statusText}`);
        }

        const result = await response.text();
        return result;
    } catch (error) {
        console.error('Erro ao obter os pontos de coleta:', error);
        throw new Error('Não foi possível obter os pontos de coleta. Por favor, tente novamente mais tarde.');
    }
};

// Função para obter pontos de coleta filtrados por cidade
export const getFilteredCollectionPoints = async (city: string): Promise<any> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow" as RequestRedirect,
    };

    try {
        const response = await fetch(`${API_URL}/collection/points/filter?city=${encodeURIComponent(city)}`, requestOptions);

        if (!response.ok) {
            throw new Error(`Erro ao obter os pontos de coleta filtrados: ${response.statusText}`);
        }

        const result = await response.text();
        return result;
    } catch (error) {
        console.error('Erro ao obter os pontos de coleta filtrados:', error);
        throw new Error('Não foi possível obter os pontos de coleta filtrados. Por favor, tente novamente mais tarde.');
    }
};