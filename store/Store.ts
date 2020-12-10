import { configureStore } from '@reduxjs/toolkit';

import comparisonReducer from '@cob/store/slices/comparison.slice';
import banksReducer from '@cob/store/slices/bank.slice';

export default configureStore({
    reducer: {
        comparison: comparisonReducer,
        banks: banksReducer,
    },
});
