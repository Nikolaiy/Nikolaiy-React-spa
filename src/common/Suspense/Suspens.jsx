import React, {Suspense} from "react";


const LazyLoader = (Component) => {
    return (props) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Component {...props}/>
            </Suspense>
        );
    };
};

export default LazyLoader;