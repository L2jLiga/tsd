import {expectType} from '../../..';
import one from '.';

expectType<string>(one('foo', 'bar'));
expectType<number>(one(1, 2));
