export default function Button({ onClear, onPredict }) {
    return (
        <div className="button">
            <div className="clear-btn btn">
                <button type="button" onClick={onClear}>Clear</button>
            </div>
            <div className="predict-btn btn">
                <button type="button" onClick={onPredict}>Predict</button>
            </div>
        </div>
    );
}