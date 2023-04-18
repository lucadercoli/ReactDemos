import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import appStore from './redux/store';
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Provider store={appStore}>
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
</Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();