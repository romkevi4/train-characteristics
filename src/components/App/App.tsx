import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TrainList from '../TrainList/TrainList';
import { TrainsListApi } from '../../API/TrainsListApi';
import { handleTrainsInfo } from '../../store/slices/trainsCharacteristicsSlice';

import './App.css';

export default function App() {
    const dispatch = useDispatch();
    const getTrainsList = (obj: {trainsArr: []}) => dispatch(handleTrainsInfo(obj));

    useEffect(() => {
        TrainsListApi().then(data => {
            getTrainsList({
                trainsArr: data
            });
        });
    }, []);

    return (
        <div className="App">
            <TrainList />
        </div>
    );
}
