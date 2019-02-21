import { Component } from 'react';
import { setIdToken, setAccessToken } from "../utils/Auth";

class Callback extends Component {
    componentDidMount() {
        setAccessToken();
        setIdToken();
        window.location.href = "/";
    }

    render() {
        return null;
    }
}

export default Callback;
