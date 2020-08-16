import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK } from 'http-status-codes';

import { paramMissingError } from '@shared/constants';

import { callNumber } from '../services/call'

// Init router and path
const router = Router();

// Add sub-routes
router.post('/call', async (req: Request, res: Response) => {
    const { telno } = req.body;

    console.log(req.body)

    if (!telno) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    //await make the the call
    //console.log(`telno: ${telno}`)
    try {
        const callId = await callNumber(telno);
        return res.status(OK).send(callId);
    } catch (e) {
        return res.status(500).send(new Error(e.toString()))
    }
});

// Export the base-router
export default router;
