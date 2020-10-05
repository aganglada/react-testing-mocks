import { setupWorker } from 'msw'
import handlers from './test/handlers'

export const worker = setupWorker(...handlers)
