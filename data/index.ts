import { filter as Filter } from 'lodash';

import Banks from './banks';
import BankModel from '@cob/lib/types/Banks/BankModel';

/**
 * Because this is weird code with no DB.
 *
 * Going to stitch things together using lodash and other cool data manipulation weapons
 * for JS.
 *
 * This class will form the basis for comparison and option building on a customer
 * to customer basis somewhere down the road.
 *
 * @version 0.0.1
 */
export default class DataBuilder {
    /**
     * Get the banks available.
     */
    getBanks(): BankModel[] {
        return Banks;
    }

    /**
     * Get a single bank.
     *
     * @param shortcode
     */
    static bank(shortcode: string): BankModel | void {
        const filteredData = Filter(Banks, (bnk) => bnk.shortcode === shortcode);

        return filteredData.length === 0 ? null : filteredData[0];
    }
}
