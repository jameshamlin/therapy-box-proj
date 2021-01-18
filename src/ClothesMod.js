import React, {useState} from 'react'
import Chart from "react-google-charts";
import netAPI from "./NetAPI";

const ClothesMod = () => {

    const [cloths, setClothes] = useState({});

    const retrieveClothes = () => {
        /*let url = `https://therapy-box.co.uk/hackathon/clothing-api.php?username=james`;

        fetch(url, {
            method: 'GET',
            mode: "cors",
        })
            .then(response => response.json())
            .then(response => {
                console.load('clothes', response);
            })*/

        const response = netAPI({system: 'clothes'}, (response) => {

            console.log("clothes", response.clothes);
            setClothes(response.clothes);
        });
    }

    React.useEffect( retrieveClothes, [] );

    return <div>
        <Chart
            width={'150px'}
            height={'150px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Task', 'Hours per Day'],
                ['Work', 11],
                ['Eat', 2],
                ['Commute', 2],
                ['Watch TV', 2],
                ['Sleep', 7],
            ]}
            options={{
                legend: 'none',
                pieSliceText: 'label',
            }}
            rootProps={{ 'data-testid': '1' }}
        />
    </div>
}

export default ClothesMod