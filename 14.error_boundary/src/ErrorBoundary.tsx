import React, { Component, ErrorInfo } from "react";

export default class ErrorBoundary extends Component<any, any> {
    constructor(props: any){
        super(props);

        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        console.log('getDerivedStateFromError invoked.')
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        console.log('componentDidCatch invoked.')
        console.log(error);
        console.log(info);
    }

    render(){
        // FALLBACK UI
        if(this.state.hasError){
            return <h1>Oops! Something went wrong ...</h1>
        }

        return this.props.children;
    }
}