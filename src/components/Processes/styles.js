import styled from 'styled-components'
import { Collapse } from 'antd'
import { primaryColor } from 'assets/global'

const { Panel } = Collapse

export const Process = styled(Panel)`
  margin-top: 12px;
  margin-bottom: 12px;
  padding-bottom: 6px;
`

export const ProcessFolderLink = styled.div`
  text-align: center;
  margin: 7.5px 10px 7.5px 10px;
  padding: 7.5px 22px 7.5px 22px;

  & a {
    color: ${primaryColor};
  }
`
