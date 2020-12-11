import React, { ReactElement } from 'react';
import Error from 'next/error';

import PageWrapper from '@cob/lib/Ui/Page/PageWrapper';
import { useRouter } from 'next/router';
import DataBuilder from '../../../data';

/**
 * Display a single bank
 *
 * @constructor
 */
function Bank(): ReactElement {
    const router = useRouter();

    const bankShortcode = router.asPath.split('/')[2];
    const bank = DataBuilder.bank(bankShortcode);

    if (bank === null) {
        return <Error statusCode={404} />;
    }

    return (
        <PageWrapper>
            <div className={'bg-white mt-2 px-4 pt-2 rounded-t-md'}>{bank.name}</div>
        </PageWrapper>
    );
}

export default Bank;
