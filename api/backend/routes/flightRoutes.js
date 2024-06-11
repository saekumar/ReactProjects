import express from 'express'
import fetchFlightData from '../flightApiData/fetch.js'
import { Router } from 'express'

const router = Router()

router.get('/flights', fetchFlightData)

export default router
