import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = (data) => {
    return (
        <>
            <ResponsiveContainer width="100%" height={400}>

                <LineChart data={data} margin={{ top: 15, right: 15, left: 15, bottom: 15 }}>

                    <Line dataKey="newCases" stroke="#34a853" dot={false}/>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="date" />

                    <YAxis datakey="newCases" domain={['dataMin', 'dataMax + 1243']} />
                    
                    <Tooltip />

                </LineChart>

            </ResponsiveContainer>
        </>
    )
}
