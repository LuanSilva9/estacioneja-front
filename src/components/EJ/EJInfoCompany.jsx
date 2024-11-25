export default function EJInfoCompany({MapperCompany}) {
    let cnpj = MapperCompany.companyCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")


    return (
        <div className="info-company">
            <div className="texts-company">
                <h1>{MapperCompany.companyName}</h1>
            </div>

            <div className="info-legals-company">
                <h2>{cnpj}</h2>
                <h2>{MapperCompany.companyAddress.street} - {MapperCompany.companyAddress.neighborhood}, {MapperCompany.companyCity.name}, {MapperCompany.companyCity.uf}</h2>
            </div>

        </div>
    )
}