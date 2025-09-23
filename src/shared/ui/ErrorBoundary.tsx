import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorKey: number
}


export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false, errorKey: 0 };
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.error('Error catch by ErrorBoundary:', error, errorInfo)
    }

    handleReset = () => {
        this.setState(prevState => ({
            hasError: false,
            errorKey: prevState.errorKey + 1
        }))
    }

    render() {
        if (this.state.hasError) {
            return <>
                <div>Что-то пошло не так</div>
                <button onClick={this.handleReset}>Перезагрузить</button>
            </>
        }

        return <div key={this.state.errorKey}>{this.props.children}</div>
    }
}