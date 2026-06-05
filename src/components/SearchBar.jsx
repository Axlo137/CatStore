function SearchBar({ value, onChange }) {
	return (
		<label className="search-bar" htmlFor="cat-search">
			<span>Search cats</span>
			<input
				id="cat-search"
				type="search"
				placeholder="Try name or breed"
				value={value}
				onChange={(event) => onChange(event.target.value)}
			/>
		</label>
	)
}

export default SearchBar
