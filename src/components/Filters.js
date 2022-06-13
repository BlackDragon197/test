import {useDispatch, useSelector} from 'react-redux';
import {setFilter} from 'store/slices/restSlice'
export const Filters = () => {
    const rest_types = useSelector(state => state.rests.rest_types);
    const dispatch = useDispatch()
    return (
        <div style={{position: 'absolute', top: '110px'}}>
            <ul>
                {rest_types.map((rest, id) => (
                    <li key={rest + id}>
                        <input
                            onClick={() => dispatch(setFilter({rest: rest}))}
                            type="checkbox"
                            id={rest + '-id'}
                        />
                        {rest}
                    </li>
                ))}
            </ul>
        </div>
    );
};
