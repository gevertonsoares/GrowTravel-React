import { Link } from "react-router-dom";

export function NavList() {
  return (
    <div>
      <ul>
        <li><Link to={"/QuemSomos"}>GrowTravel</Link></li>
        <li><a href="/Servicos">Serviços</a></li>
        <li><a href="/Planos">Planos</a></li>
        <li><a href="/Contato">Contato</a></li>
      </ul>
    </div>
  );
}


