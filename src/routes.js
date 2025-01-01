import express from 'express';
import getAllCompaniesId from './endpoints/get-all-companies-id.js';
import getAllBranchesId from './endpoints/get-all-branches-id.js';
import getAllCompaniesEtBranchesId from '../shops/get-all-companies-and-branch-ids.js';
import getCompanyData from './endpoints/get-company-data.js';

const routes = express.Router();

routes.get('/get-company-data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const getData = await getCompanyData({id});
        res.status(201).json(getData[0]);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al capturar datos', error: error.message });
    }
});
routes.get('/get-all-companies-id', async (req, res) => {
    try {
        const response = await getAllCompaniesId();
        res.status(201).json(response);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al capturar datos', error: error.message });
    }
});
routes.get('/get-all-branches-id', async (req, res) => {
    try {
        const response = await getAllBranchesId();
        res.status(201).json(response);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al capturar datos', error: error.message });
    }
});
routes.get('/get-all-companies-et-branches-id', async (req, res) => {
    try {
        const response = await getAllCompaniesEtBranchesId();
        res.status(201).json(response);
    } catch (error) {
        // Si ocurre un error, enviar una respuesta de error
        res.status(500).json({ message: 'Error al capturar datos', error: error.message });
    }
});
export default routes;