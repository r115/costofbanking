import { configureStore } from '@reduxjs/toolkit';

import comparisonReducer from '@cob/store/slices/comparison.slice';

export default configureStore({
    reducer: {
        comparison: comparisonReducer,
    },
});
