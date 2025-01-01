import { queryDb } from "../db/db-query.js";

export default async function getAllCompaniesId(){
    const query = `
        SELECT id FROM companies
    `;
    const params = [];
    try {
        const result = await queryDb(query, params, true);
        return result;
    } catch (error) {
        throw error;
    }
}