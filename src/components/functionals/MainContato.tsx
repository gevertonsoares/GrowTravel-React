import { useCallback, useState } from "react";
import { MainContato as ContatoStyled } from "../styled/MainContato";
import { v4 as generateUUID } from "uuid";

interface Contatos {
    id: string,
    nome: string,
    email: string,
    telefone: string,
    mensagem: string,
}

export function MainContato() {

    const [mensagens, setMensagens] = useState<Contatos[]>([]);
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [mensagem, setMensagem] = useState<string>("");


    const submitForm = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const novaMensagem = { 
            id: generateUUID(), 
            nome, 
            email, 
            telefone, 
            mensagem
        };

            setMensagens((mensagensExistentes) => [novaMensagem, ...mensagensExistentes])
            localStorage.setItem('mensagens', JSON.stringify([...mensagens,novaMensagem]))
            setNome('')
            setEmail('')
            setTelefone('')
            setMensagem('')
        }, [nome, email, telefone, mensagem, mensagens, setMensagens, setNome, setEmail, setTelefone, setMensagem]);


      return (
        <ContatoStyled>
            <div>
                <h2>Formulário</h2>
                <div>
                    <form onSubmit={submitForm}>
                        <label>Nome:</label> <br />
                        <input type="text" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} required /> <br />

                        <label>E-mail:</label> <br />
                        <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required /> <br />

                        <label>Telefone:</label> <br />
                        <input type="text" name="telefone" value={telefone} onChange={(event) => setTelefone(event.target.value)} required /> <br />
                            
                        <label>Mensagem:</label> <br />
                        <textarea name="mensagem" value={mensagem} cols={52} rows={10} onChange={(event) => setMensagem(event.target.value)} required></textarea>

                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </ContatoStyled>
    );
}