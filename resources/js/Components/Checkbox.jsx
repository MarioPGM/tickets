export default function Checkbox({ name, value, handleChange }) {
    return (
        <input
            type="checkbox"
            name={name}
            value={value}
            className="checkbox checkbox-primary"
            onChange={(e) => handleChange(e)}
        />
    );
}
