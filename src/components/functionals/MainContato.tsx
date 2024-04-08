import { MainContato as ContatoStyled } from "../styled/MainContato";

export function MainContato() {
      return (
        <ContatoStyled>
            <div>
                <h2>Formulário</h2>
                <div>
                    <form>
                        <label>Nome:</label> <br />
                        <input type="text" name="nome" required /> <br />

                        <label>E-mail:</label> <br />
                        <input type="email" name="email" required /> <br />

                        <label>Telefone:</label> <br />
                        <input type="text" name="telefone" required /> <br />
                            
                        <label>Mensagem:</label> <br />
                        <textarea name="mensagem" id="" cols={52} rows={10} required></textarea>

                        <br />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </ContatoStyled>
    );
}