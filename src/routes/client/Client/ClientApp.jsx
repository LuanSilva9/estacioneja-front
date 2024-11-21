import HeaderbarClient from "../../../components/HeaderbarClient";

export default function ClientApp() {
    return (
        <main className="clientApp">
            <HeaderbarClient linksItemMap={false} logged={true}/>
        </main>
    )
}