import {
    Line,
    LineChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";

const LineCharts = () => {
    const salesData = [
        { id: 1, month: "Jan", revenue: 1045, profit: 509 },
        { id: 2, month: "Feb", revenue: 1075, profit: 801 },
        { id: 3, month: "Mar", revenue: 1089, profit: 602 },
        { id: 4, month: "Apr", revenue: 1040, profit: 409 },
        { id: 5, month: "Jun", revenue: 1065, profit: 500 },
        { id: 6, month: "Jul", revenue: 1042, profit: 803 },
        { id: 7, month: "Aug", revenue: 1050, profit: 701 },
        { id: 8, month: "Sep", revenue: 1061, profit: 609 },
        { id: 9, month: "Oct", revenue: 1076, profit: 600 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="5 10" />

                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#2563eb"
                    fill="#3b82f6" />
                <Line
                    type="monotone"
                    dataKey="profit"
                    stroke="#7c3aed"
                    fill="#8b5cf6" />

            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineCharts;