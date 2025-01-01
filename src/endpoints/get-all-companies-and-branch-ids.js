import { queryDb } from "../db/db-query.js";

export default async function getAllCompaniesEtBranchesId(){
    const query = `
        SELECT
            c.id,
            COALESCE(
                jsonb_agg(
                    jsonb_build_object('branch_id', branch->>'branch_id')
                ) FILTER (WHERE branch->>'branch_id' IS NOT NULL),
                '[]'::jsonb
            ) AS branch_ids
        FROM
            companies AS c
        LEFT JOIN LATERAL
            jsonb_array_elements(c.branches::jsonb) AS branch ON TRUE
        GROUP BY
            c.id;
    `;
    const params = [];
    try {
        const result = await queryDb(query, params, true);
        return result;
    } catch (error) {
        throw error;
    }
}