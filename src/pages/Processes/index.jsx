import { useState } from 'react'
import ArticleIcon from '@mui/icons-material/Article'
import Header from 'components/Container/Header'
import ProcessessMenu from 'components/Processes/ProcessesMenu'
import ActiveProcesses from 'components/Processes/ActiveProcesses'
import ConcludedProcesses from 'components/Processes/ConcludedProcesses'


const Processes = () => {
    const [menuOption, setMenuOption] = useState('ativos')

    return (
        <>
            <Header
                pageTitle='Processos'
                pageDesc='Lista com todos os processos do sistema e suas informações.'
            >
                <ArticleIcon style={{ fontSize: '48px' }} />
            </Header>

            <ProcessessMenu menuOption={menuOption} setMenuOption={setMenuOption} />

            <>
                {menuOption === 'ativos' && <ActiveProcesses />}
                {menuOption === 'concluidos' && <ConcludedProcesses />}
            </>
        </>
    )
}
export default Processes