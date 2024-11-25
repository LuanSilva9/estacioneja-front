export default function EJCardCompany({ MapperCompany }) {
    return (
        <div className="card-company">
            <img src={MapperCompany.companyLogo} alt="label-image-company" />

            <div className="info-card-company">
                <h2>{MapperCompany.companyName}</h2>
                <p>{MapperCompany.companyAddress.street} - {MapperCompany.companyAddress.neighborhood}</p>
            </div>
        </div>
    )
}