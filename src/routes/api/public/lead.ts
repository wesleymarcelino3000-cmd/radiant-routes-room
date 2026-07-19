import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { sendTemplateEmail } from '@/lib/email-templates/send-email'

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(3).max(60),
  serviceType: z.string().trim().min(1).max(120),
  message: z.string().trim().min(1).max(4000),
})

const RECIPIENT = 'primecode321@gmail.com'

export const Route = createFileRoute('/api/public/lead')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown
        try {
          body = await request.json()
        } catch {
          return Response.json({ error: 'invalid_json' }, { status: 400 })
        }

        const parsed = LeadSchema.safeParse(body)
        if (!parsed.success) {
          return Response.json({ error: 'invalid_input', details: parsed.error.flatten() }, { status: 400 })
        }

        const data = parsed.data
        const submissionId = crypto.randomUUID()

        try {
          const result = await sendTemplateEmail('lead-notification', RECIPIENT, {
            templateData: {
              ...data,
              submittedAt: new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
            },
            idempotencyKey: `lead-${submissionId}`,
            replyTo: data.email,
          })

          if (!result.sent) {
            console.warn('[lead] email not sent:', result.reason)
          }
        } catch (err) {
          console.error('[lead] send failed:', err)
          return Response.json({ error: 'send_failed' }, { status: 500 })
        }

        return Response.json({ ok: true })
      },
      OPTIONS: () =>
        new Response(null, {
          status: 204,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'content-type',
          },
        }),
    },
  },
})
