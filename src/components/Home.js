import {useLocation} from 'react-router-dom';

export default function Home() {
    const data = useLocation();
    let {state} = data;
    return (
        <>
            <h1>Hello user <span style={{color: "orange"}}>{state.account}</span></h1>
        </>
    );
}