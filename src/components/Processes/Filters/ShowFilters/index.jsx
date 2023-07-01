import { Checkbox } from 'antd'

const ShowFilters = () => {
    const options = [
        { filtro: 'Cód. Processo' },
        { filtro: 'Nome Cliente' },
        { filtro: 'Vencimento' },
        { filtro: 'UF (Estado)' },
        { filtro: 'Status Processo' },
        { filtro: 'Resp. Processo' },
        { filtro: 'Data Cad. Causa' }
    ];

    const onChange = () => {
        console.log("checked");
    };

    return (
        <>
            {options.map(({ filtro }) => (
                <Checkbox key={filtro} onChange={onChange}>
                    {filtro}
                </Checkbox>
            ))}
        </>
    );
};

export default ShowFilters
