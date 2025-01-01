import { queryDb } from "../db/db-query.js";

export default async function getAllBranchesId(){
    const query = `
        SELECT
            branch->>'branch_id' AS branch_id
        FROM
            companies,
            jsonb_array_elements(branches::jsonb) AS branch;
    `;
    const params = [];
    try {
        const result = await queryDb(query, params, true);
        return result;
    } catch (error) {
        throw error;
    }
}