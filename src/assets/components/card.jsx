function Card({ weather, toggle, setToggle }) {
	const temp = toggle
		? parseInt(weather.tempperature * (9 / 5) + 32)
		: weather.tempperature;
	return (
		<>
			<h1 className="title">Weather App</h1>
			<img src={weather.icon} alt={weather.main} width={150} />
			<div className="card">
				<h2 className="card__subtitle">
					{weather.city},{weather.country}
				</h2>
				<div className="card__body">
					<div className="card__info">
						<h3 className="card__main">"{weather.main}"</h3>
						<p className="card__wind-speed">Wind speed {weather.wind}m/s</p>
						<p className="card__clouds">Cloud {weather.clouds}%</p>
						<p className="card__pressure">Pressure {weather.pressure}Pa</p>
					</div>
					<h2 className="card__temperature">
						{temp}
						{toggle ? '°F' : '°C'}
					</h2>
					<h3>Change to</h3>
					<button className="ix" onClick={() => setToggle(!toggle)}>
						{!toggle ? '°F' : '°C'}
					</button>
				</div>
				{/* <img src="/src/assets/images/atmosphere.png" alt="" width={50} />
				<img src="/src/assets/images/clearSvg,.png" alt="" width={50} />
				<img src="/src/assets/images/cloud.png" alt="" width={50} />
				<img src="/src/assets/images/drizzleSvg.png" alt="" width={50} />
				<img src="/src/assets/images/rainSvg.png" alt="" width={50} />
				<img src="/src/assets/images/snow.png" alt="" width={50} />
				<img src="/src/assets/images/thunderstorm.png" alt="" width={50} /> */}
			</div>
		</>
	);
}

export default Card;
