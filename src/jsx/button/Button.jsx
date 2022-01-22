import './Button.css'

const Button = ({ url, label, btnclass = "primary" }) => {
	return (
		<>
			<a href={url} className={`btn btn-${btnclass}`}>{label}</a>
		</>
	);
}

export default Button;