import '../style/RealEstateGrid.css';
import RealState from './RealEstate';

function RealEstateGrid() {
    return (
        <div className="rl-grid-container">
            <h2>Цікаві пропозиції</h2>
            <div className="grid">
                <RealState display="grid"></RealState>
                <RealState display="grid"></RealState>
                <RealState display="grid"></RealState>
                <RealState display="grid"></RealState>
            </div>
            <a className="button-action">дивитись більше</a>
        </div>
    )
}

export default RealEstateGrid;