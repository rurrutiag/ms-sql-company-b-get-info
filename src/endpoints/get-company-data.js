import { queryDb } from "../db/db-query.js";

export default async function getCompanyData({
    id
}){
    const query = `
        SELECT * FROM companies WHERE id = $1;
    `;
    const params = [id];
    try {
        const result = await queryDb(query, params, true);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}