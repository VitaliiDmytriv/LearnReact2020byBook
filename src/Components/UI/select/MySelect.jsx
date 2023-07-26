function MySelect({
    options = [],
    defaultValue = "",
    value = "",
    onChange = (f) => f,
}) {
    return (
        <select value={value} onChange={(e) => onChange(e.target.value)}>
            <option hidden value={defaultValue}>
                {defaultValue}
            </option>
            {options.map((option) => {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                );
            })}
        </select>
    );
}

export default MySelect;
