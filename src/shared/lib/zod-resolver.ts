import { zodResolver as resolver } from '@hookform/resolvers/zod'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const zodResolver = (schema: any) => resolver(schema) as any
