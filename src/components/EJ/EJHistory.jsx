export default function EJHistory({ MapperJsonHistory }) {
    return (
        <div className="history">
            <h4>{MapperJsonHistory.companyName}</h4>
            <h4>{MapperJsonHistory.data}</h4>
        </div>
    )
}