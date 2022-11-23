import { React, Component } from "react";

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);

		this.state = { error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ error: error, errorInfo: errorInfo });
		console.log(`${error}: ${errorInfo}`);
	}

	render() {
		if (this.state.errorInfo) {
			return (
				<div>
					<h2>Something went wrong!</h2>
					<p style={{ color: "red" }}>
						{this.state.error && this.state.error.toString()}
						<br />
						{this.state.errorInfo.componentStack}
					</p>
				</div>
			);
		}

		return this.props.chiildren;
	}
}

export default ErrorBoundary;
