import * as S from './styles'


function UploadFile({ onChange, file }) {
    return (
        <S.FileUpload>
            <S.InputFile type="file" id="file" accept="application/csv" onChange={onChange} />
            <S.FileLabel htmlFor="file">
                <S.FileName>{file ? file.name : 'Selecionar planilha'}</S.FileName>
                <S.FileButton>Procurar</S.FileButton>
            </S.FileLabel>
        </S.FileUpload>
    );
};
export default UploadFile;
