import {
    Area,
    AreaChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from "recharts";



const AreaCharts = () => {
    const salesData = [
        { id: 1, month: "Jan", product1: 45, product2: 59 },
        { id: 2, month: "Feb", product1: 75, product2: 81 },
        { id: 3, month: "Mar", product1: 89, product2: 62 },
        { id: 4, month: "Apr", product1: 40, product2: 49 },
        { id: 5, month: "Jun", product1: 65, product2: 50 },
        { id: 6, month: "Jul", product1: 42, product2: 83 },
        { id: 7, month: "Aug", product1: 50, product2: 91 },
        { id: 8, month: "Sep", product1: 61, product2: 69 },
        { id: 9, month: "Oct", product1: 76, product2: 60 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width={400} height={400} data={salesData}>
                <XAxis dataKey="month" />
                <CartesianGrid strokeDasharray="5 10" />

                <Tooltip />
                <Legend />
                <Area
                    type="monotone"
                    dataKey="product1"
                    stroke="#2563eb"
                    fill="#3b82f6"
                    stackId="1" />
                <Area
                    type="monotone"
                    dataKey="product2"
                    stroke="#7c3aed"
                    fill="#8b5cf6"
                    stackId="1" />

            </AreaChart>
        </ResponsiveContainer>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-700 flex flex-col gap-4 rounded-md">
                <p className="font-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Product:1
                    <span className="ml-2">${payload[0].value}</span>
                </p>

                <p className="text-sm text-blue-400">
                    Product:2
                    <span className="ml-2">${payload[1].value}</span>
                </p>

            </div>
        )
    }
}

export default AreaCharts;