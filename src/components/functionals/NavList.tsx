import { Link } from "react-router-dom";

export function NavList() {
  return (
    <div>
      <ul>
        <li><Link to={"/QuemSomos"}>Quem Somos</Link></li>
        <li><Link to={"/Servicos"}>Serviços</Link></li>
        <li><Link to={"/Planos"}>Planos</Link></li>
        <li><Link to={"/Contato"}>Contatos</Link></li>
      </ul>
    </div>
  );
}


