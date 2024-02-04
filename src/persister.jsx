import { del, get, set } from "idb-keyval";

/**
 * Creates an Indexed DB persister
 * @see https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
 */
export const createIDBPersister = (idbValidKey = "reactQuery") => {
    return {
        persistClient: async (client) => {
            await set(idbValidKey, client);
        },
        restoreClient: async () => {
            return await get(idbValidKey);
        },
        removeClient: async () => {
            await del(idbValidKey);
        },
    };
};
