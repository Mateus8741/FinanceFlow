import { VictoryPie } from 'victory-native';

interface ChartProps {
  data: { x: string; y: number; color: string }[];
}

export function Chart({ data }: ChartProps) {
  return (
    <VictoryPie
      height={280}
      width={360}
      data={data}
      colorScale={data.map((d) => d.color)}
      innerRadius={45}
      labelRadius={({ innerRadius }) => Number(innerRadius) + 7}
      labels={({ datum }) => `${(datum.y / 100).toFixed(0)}%`}
      style={{
        labels: {
          fill: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}
    />
  );
}
