import * as React from 'react'
import {
  Body,
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

const Email = ({
  name = '—',
  email = '—',
  phone = '—',
  serviceType = '—',
  message = '—',
  submittedAt = new Date().toLocaleString('pt-BR'),
}: Props) => (
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

        <Section>
          <Row label="Nome" value={name} />
          <Row label="Email" value={email} />
          <Row label="Telefone" value={phone} />
          <Row label="Interesse" value={serviceType} />
        </Section>

        <Hr style={hr} />

        <Section>
          <Text style={label}>Mensagem</Text>
          <Text style={messageBox}>{message}</Text>
        </Section>

        <Hr style={hr} />

        <Text style={footer}>
          Este email foi enviado automaticamente pelo formulário do site primecode1.com.br
        </Text>
      </Container>
    </Body>
  </Html>
)

const Row = ({ label: l, value }: { label: string; value: string }) => (
  <Section style={{ marginBottom: '12px' }}>
    <Text style={label}>{l}</Text>
    <Text style={valueStyle}>{value}</Text>
  </Section>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `Novo lead: ${data.name ?? 'Sem nome'} — ${data.serviceType ?? 'Interesse não informado'}`,
  displayName: 'Notificação de Lead (site)',
  previewData: {
    name: 'Wesley Marcelino',
    email: 'wesley@example.com',
    phone: '(37) 92000-0000',
    serviceType: 'Site institucional',
    message: 'Gostaria de um orçamento para meu negócio.',
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
const label = { fontSize: '11px', color: '#64748b', textTransform: 'uppercase' as const, letterSpacing: '0.1em', margin: '0 0 4px' }
const valueStyle = { fontSize: '15px', color: '#0f172a', margin: 0, fontWeight: 500 }
const messageBox = { fontSize: '14px', color: '#334155', margin: 0, lineHeight: '1.6', whiteSpace: 'pre-wrap' as const, padding: '12px 14px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' }
const footer = { fontSize: '12px', color: '#94a3b8', textAlign: 'center' as const, margin: '16px 0 0' }
