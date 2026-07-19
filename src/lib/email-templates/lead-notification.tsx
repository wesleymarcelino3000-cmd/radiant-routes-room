import * as React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  phone?: string
  serviceType?: string
  message?: string
  submittedAt?: string
}

const digitsOnly = (v: string) => v.replace(/\D/g, '')

const buildWhatsAppUrl = (phone: string, name: string) => {
  const digits = digitsOnly(phone)
  if (!digits) return ''
  const withCountry = digits.length <= 11 ? `55${digits}` : digits
  const text = encodeURIComponent(
    `Olá ${name.split(' ')[0] || ''}! Aqui é da PrimeCode. Recebi seu diagnóstico no nosso site e queria conversar sobre seu projeto.`,
  )
  return `https://wa.me/${withCountry}?text=${text}`
}

const Email = ({
  name = '—',
  email = '—',
  phone = '—',
  serviceType = '—',
  message = '—',
  submittedAt = new Date().toLocaleString('pt-BR'),
}: Props) => {
  const waUrl = phone !== '—' ? buildWhatsAppUrl(phone, name) : ''
  const mailUrl =
    email !== '—'
      ? `mailto:${email}?subject=${encodeURIComponent('PrimeCode — sobre seu diagnóstico')}&body=${encodeURIComponent(`Olá ${name.split(' ')[0] || ''},\n\nRecebemos seu diagnóstico no site e queríamos conversar sobre seu projeto.\n\n— Equipe PrimeCode`)}`
      : ''

  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Novo lead: {name} — {serviceType}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brand}>PrimeCode</Text>
            <Heading style={h1}>Novo lead recebido</Heading>
            <Text style={sub}>Recebido em {submittedAt}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={contactCard}>
            <Text style={contactTitle}>Contato do lead</Text>
            <Text style={contactName}>{name}</Text>
            <Text style={contactLine}>
              <strong style={contactLabel}>Email:</strong> {email}
            </Text>
            <Text style={contactLine}>
              <strong style={contactLabel}>WhatsApp:</strong> {phone}
            </Text>
            <Text style={contactLine}>
              <strong style={contactLabel}>Interesse:</strong> {serviceType}
            </Text>

            {(waUrl || mailUrl) && (
              <Section style={{ marginTop: '18px' }}>
                {waUrl && (
                  <Button href={waUrl} style={btnPrimary}>
                    Responder no WhatsApp
                  </Button>
                )}
                {mailUrl && (
                  <Button href={mailUrl} style={btnSecondary}>
                    Responder por email
                  </Button>
                )}
              </Section>
            )}
          </Section>

          <Hr style={hr} />

          <Section>
            <Text style={label}>Respostas do diagnóstico</Text>
            <Text style={messageBox}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Enviado automaticamente pelo formulário do site primecode1.com.br
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Novo lead: ${data.name ?? 'Sem nome'} — ${data.serviceType ?? 'Interesse não informado'}`,
  displayName: 'Notificação de Lead (site)',
  previewData: {
    name: 'Wesley Marcelino',
    email: 'wesley@example.com',
    phone: '(37) 92000-0000',
    serviceType: 'Diagnóstico — Site institucional',
    message:
      'Serviço: Site institucional\nSegmento: Saúde / Clínica\nSituação atual: Não tenho nada ainda\nPrincipal dor: Poucos clientes chegando\nObjetivo em 90 dias: Gerar mais leads qualificados\nOrçamento: R$ 3.000 – R$ 8.000\nUrgência: Nos próximos 30 dias',
    submittedAt: new Date().toLocaleString('pt-BR'),
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif', margin: 0 }
const container = { padding: '32px 28px', maxWidth: '560px' }
const header = { paddingBottom: '8px' }
const brand = { fontSize: '12px', letterSpacing: '0.22em', color: '#3b82f6', textTransform: 'uppercase' as const, margin: 0 }
const h1 = { fontSize: '22px', color: '#0f172a', margin: '8px 0 4px', fontWeight: 700 }
const sub = { fontSize: '13px', color: '#64748b', margin: 0 }
const hr = { borderColor: '#e2e8f0', margin: '20px 0' }
const label = { fontSize: '11px', color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.1em', margin: '0 0 8px' }
const messageBox = { fontSize: '14px', color: '#334155', margin: 0, lineHeight: '1.7', whiteSpace: 'pre-wrap' as const, padding: '14px 16px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }
const footer = { fontSize: '12px', color: '#94a3b8', textAlign: 'center' as const, margin: '16px 0 0' }

const contactCard = { padding: '20px 20px', backgroundColor: '#f1f5f9', borderRadius: '12px', border: '1px solid #e2e8f0' }
const contactTitle = { fontSize: '11px', color: '#3b82f6', textTransform: 'uppercase' as const, letterSpacing: '0.18em', margin: '0 0 6px', fontWeight: 700 }
const contactName = { fontSize: '20px', color: '#0f172a', margin: '0 0 12px', fontWeight: 700 }
const contactLine = { fontSize: '14px', color: '#334155', margin: '4px 0' }
const contactLabel = { color: '#64748b', fontWeight: 600 as const }
const btnPrimary = { backgroundColor: '#25D366', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block', marginRight: '10px' }
const btnSecondary = { backgroundColor: '#0f172a', color: '#ffffff', padding: '12px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }
