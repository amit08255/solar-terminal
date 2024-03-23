/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';
import panelDataGenerator from '../../utilities/panelDataGenerator';

type ResponseData = {
    message: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>,
) {
    res.status(200).json(panelDataGenerator() as any);
}
