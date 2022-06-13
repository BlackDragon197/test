import {useSelector} from 'react-redux';
import { RestItem } from './RestItem';

export const RestList = () => {
    const rests = useSelector(state => state.rests.filtered_rests);
    const all_rests = useSelector(state => state.rests.rests);

    return (
        <ul>
            {rests.length ? rests.map((rest) => (
                <RestItem
                    key={rest.id + rest.name}
                    {...rest}
                />
            )) : all_rests.map((rest) => (
                <RestItem
                    key={rest.id + rest.name}
                    {...rest}
                />
            ))}
        </ul>
    );
};
