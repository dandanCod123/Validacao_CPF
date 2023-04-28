import React, { useRef, useState } from 'react';
import axios from 'axios';

import '../src/App.css';

interface Props {}

const ValidarCPF: React.FC<Props> = () => {
  const [valido, setValido] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const validarCPF = async () => {
    const cpf = inputRef.current?.value;
    const token =  "eyJraWQiOiJyc2ExIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIyMDgyMTkyMjQ1OSIsImF1ZCI6Im10Y2lkYWRhby5tdC5nb3YuYnIiLCJzY29wZSI6WyJlbWFpbCIsIm9wZW5pZCIsInBob25lIiwicHJvZmlsZSJdLCJhbXIiOiJwYXNzd2QiLCJpc3MiOiJodHRwczpcL1wvc3NvLnN0YWdpbmcuYWNlc3NvLmdvdi5iclwvIiwiZXhwIjoxNTczNjczMTMxLCJpYXQiOjE1NzM2Njk1MzEsImp0aSI6ImE0ZDkwNGEyLTRhNDMtNDJiMy04NmQ3LWVhZWQ1Y2I1M2MyZiJ9.FH0Al-J2cIrFMNNki5QT8IzEhR-hQheAA7A02mvgTtpmTbAVxQWyGw-JuFVdycf9kTXUB9O3PUbzzGr5uq4aUWHYefEHR2jqhl4jq1Xa80lggu40djXQLl3DAVySML6KWTFUwbVLIsxbxaQ6Jh3mX4y069xScXzOtPUDGPgnZSZroc3LqdzjbaDqHSksrCp6XqMJxR5AYTDMi_M2yonXiBiKFfiP06d1bq11AVeEiyX5qOsV2mokbckFgT7UO2dPDRAG1KF-ko0jN-20TC0YWX--jjQp_Y3dRu4oexuTmBdJASt9k7YYhKlRM4AWnX89VmjLX6_CoXKzXSxqRZIRKg";
    const idCliente = "123";
    const url = "https://api.staging.acesso.gov.br";

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-CLIENT-ID': idCliente,
      },
    });

    setValido(response.data.situacao);
  };

  return (
    <div className='App'>
    <h1>VALIDE O CPF</h1>
      <input type="text" ref={inputRef} />
      <button onClick={validarCPF}>Validar CPF</button>        
      
      <p>{valido}</p>
    </div>
  );
};

export default ValidarCPF;
