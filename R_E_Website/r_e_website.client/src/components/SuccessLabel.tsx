import '../style/SuccessLabel.css'

function SuccessLabel({ success }) {
    return (
        <div className={success ? "success-label true" : "success-label false"}>
            <p> {success ? 'Запит пройшов успішно!' : 'Щось пішло не так...'}</p>
        </div>
    )
}

export default SuccessLabel;