import { Link } from "react-router-dom"

export default function FooterClient() {
    return (
        <div class="container">
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/lgpd" class="nav-link px-2 text-muted">LGPD</Link></li>
                    <li class="nav-item"><Link to="/termos-de-uso" class="nav-link px-2 text-muted">Termos</Link></li>
                    <li class="nav-item"><Link to="/suporte" class="nav-link px-2 text-muted">Suporte</Link></li>
                    <li class="nav-item"><Link to="/faq" class="nav-link px-2 text-muted">FAQs</Link></li>
                    <li class="nav-item"><Link to="/para-desenvolvedores/api" class="nav-link px-2 text-muted">API</Link></li>
                </ul>
                <p class="text-center text-muted">© 2024 EstacioneJá, Inc</p>
            </footer>
        </div>
    )
}