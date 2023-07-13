import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import uniqId from 'uniqid';

import { TrainsListApi } from '../../API/TrainsListApi';
import { ITrain, INewTrain, ICharacteristicsOfTrain } from '../../../models';
import { handleTrainsInfo } from '../../store/slices/trainsCharacteristicsSlice';
import TrainList from '../TrainList/TrainList';

import './App.css';

export default function App() {
    const dispatch = useDispatch();
    const getTrainsList = (obj: {trainsArr: INewTrain[]}) => dispatch(handleTrainsInfo(obj));

    useEffect(() => {
        TrainsListApi()
            .then((data: ITrain[]) => {
                return data.map((train: ITrain) => ({
                    ...train,
                    characteristics: train.characteristics.map((info: ICharacteristicsOfTrain) => ({
                        ...info,
                        _id: uniqId()
                    })),
                    id: uniqId()
                }));
            })
            .then((newData) => {
                getTrainsList({
                    trainsArr: newData
                });
            })
            .catch(err => console.error(`Ошибка: ${err.message}`));
    }, []);

    return (
        <div className="App">
            <TrainList />
        </div>
    );
}
