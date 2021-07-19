import MyComponent from 'components'; // <--- Should be {MyComponent}

const App = () => {
    return (
        <div>
            Webstorm import (broken) demo
            <MyComponent />
        </div>
    );
};

export default App;
