import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
    return (
        <Navbar container="md" color="dark" dark>
            <Link className="navbar-brand" href="/" passHref>
                Início
            </Link>
            <Nav className="flex-row" navbar>
                <Link className="nav-link me-2" href="/products" passHref>
                    Produtos
                </Link>
                <Link className="nav-link me-2" href="/cart" passHref>
                    Carrinho
                </Link>
                {/* legacyBehavior */}
            </Nav>
        </Navbar>
    )
}

export default Header;