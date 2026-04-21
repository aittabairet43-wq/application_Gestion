import { secureDbService } from './secureDb';

export const dbService = {
    async init() {
        return await secureDbService.init();
    },

    get dbInstance() {
        return secureDbService.dbInstance;
    },

    async save() {
        return await secureDbService.save();
    },

    exec(query: string, params: any[] = []) {
        return secureDbService.exec(query, params);
    },

    run(query: string, params: any[] = []) {
        return secureDbService.run(query, params);
    },

    isAuthenticated() {
        return secureDbService.isAuthenticated();
    },

    async logout() {
        await secureDbService.logout();
    }
};