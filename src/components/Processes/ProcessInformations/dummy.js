const formatDate = dateString => {
  const date = new Date(dateString)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = date.getUTCFullYear()
  const formattedDate = `${day}/${month}/${year}`

  return formattedDate
}

export const findProcessItems = process => [
  {
    id: 1,
    title: 'Código Processo',
    text: process.CodCausa,
  },
  {
    id: 2,
    title: 'Parte CON Principal - Nome',
    text: `${process.ParteCONPrincipalNome} (${process.ParteCONPrincipalCPFCNPJ})`,
  },
  {
    id: 3,
    title: 'UF',
    text: process.UF,
  },
  {
    id: 4,
    title: 'Nº Processo',
    text: process.NProcesso,
  },
  {
    id: 5,
    title: 'Inicio Causa',
    text: formatDate(process.DtCadCausa),
  },
  {
    id: 6,
    title: 'Responsavel Processo',
    text: process.ResponsavelNome ? process.ResponsavelNome : 'Não Atribuido',
  },
  {
    id: 7,
    title: 'Esfera',
    text: process.Esfera,
  },
  {
    id: 8,
    title: 'PRO Principal',
    text: process.PartePROPrincipalNome,
  },
  {
    id: 9,
    title: 'Data Encerramento',
    text: process.DtEncerramento
      ? formatDate(process.DtEncerramento)
      : '[NÃO INFORMADO]',
  },
  {
    id: 10,
    title: 'Motivo do Status',
    text: process.MotivodoStatus,
  },
  {
    id: 13,
    title: 'Status Processo',
    text: process.Status ? 'Concluido' : 'Ativo',
  },
]
